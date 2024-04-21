<template>
    <div class="flex flex-col md:flex-row h-screen">
        <!-- Left Panel -->
        <div class="bg-bgPrimary flex-1 flex items-center justify-center">
            <!-- Hide logo in mobile view -->
            <div class="text-center text-white p-6">
                <img src="/assets/logo.svg" alt="">
            </div>
        </div>

        <!-- Right Panel -->
        <div class="flex-1 md:w-1/3 bg-primary2 flex items-center justify-center pt-8 px-4 py-8 md:px-0">
            <div class="" >
    <div class="w-full max-w-md  bg-bgSecondary border-8 border-bgSecondary rounded-xl overflow-y-auto" style="max-height: 90vh; scrollbar-width: none;">

                <!-- Form Content -->
                <div class=" rounded-xl px-6 py-6">
                    <div class="flex mb-4">
                        <!-- First Name -->
                        <div class="w-1/2 mr-2">
                            <label class="block text-gray-700 font-bold mb-2" for="first-name">First Name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="first-name" type="text" placeholder="Enter your first name" v-model="firstName"
                                required />
                        </div>
                        <!-- Last Name -->
                        <div class="w-1/2 ml-2">
                            <label class="block text-gray-700 font-bold mb-2" for="last-name">Last Name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="last-name" type="text" placeholder="Enter your last name" v-model="lastName"
                                required />
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="mobile">Mobile Number</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobile" type="number" placeholder="Enter your mobile number" v-model="mobile"
                            required />
                        <span v-if="verifyMobile" class="text-red-500 text-sm">Please check if your mobile number is
                            correct</span>
                    </div>

                    <div class="mb-3">
                        <label class="block text-gray-700 font-bold mb-2" for="email">Email Address</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Enter your email address" v-model="email" required />
                        <span v-if="verifyEmail" class="text-red-500 text-sm">Your email does not look right</span>
                    </div>



                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="user-type">User Type</label>
                        <!-- <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio text-primary border-primary" value="user"
                                    v-model="userType">
                                <span class="ml-2">Seller</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                                <input type="radio" class="form-radio text-primary border-primary" value="client"
                                    v-model="userType">
                                <span class="ml-2">Consumer</span>
                            </label>
                        </div> -->

                        <template v-for="type in userTypes" :key="type.value">
                            <div class="flex">
                                <label class="inline-flex items-center">
                                    <input type="radio" class="form-radio text-primary border-primary" :value="type.value"
                                        v-model="userType">
                                    <span class="ml-2">{{ type.text }}</span>
                                </label>
                            </div>
                        </template>
                        
                    </div>

                    <!-- <div v-if="userType === 'user'">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="gst">GST Number</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="gst" type="text" placeholder="Enter your GST number" v-model="gst" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="shop-name">Shop Name</label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="shop-name" type="text" placeholder="Enter your shop name" v-model="shopName" />
                        </div>
                    </div> -->

                    <div class="mb-4 relative">
                        <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            :type="showPassword ? 'text' : 'password'" id="password" placeholder="Enter your password"
                            v-model="password" required />
                        <button type="button"
                            class="absolute inset-y-0 right-0 mt-8 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                            @click="showPassword = !showPassword">
                            <template v-if="showPassword">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </template>
                            <template v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </template>
                        </button>
                    </div>
                    <p v-if="verifyPassword" class="text-red-500 mb-3 text-sm">Password must have at least 8 characters,
                        1 uppercase letter,
                        1 lowercase letter, and 1 number</p>

                    <div class="mb-4 relative">
                        <label class="block text-gray-700 font-bold mb-2" for="confirm-password">Confirm
                            Password</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                            :type="showConfirmPassword ? 'text' : 'password'" id="confirm-password"
                            placeholder="Confirm your password" v-model="confirmPassword" required />
                        <button type="button"
                            class="absolute inset-y-0 right-0 mt-8 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                            @click="showConfirmPassword = !showConfirmPassword">
                            <template v-if="showConfirmPassword">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </template>
                            <template v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </template>
                        </button>
                    </div>
                    <p v-if="passwordMismatch" class="text-red-500 mb-3 text-sm">Passwords do not match.</p>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="dob">Date of Birth</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dob" type="date" v-model="dob" required />
                    </div>

                    <div class="flex items-center justify-between">
                        <p v-if="error" class="text-center text-red-500 mb-4 text-sm">{{ error }}</p>
                        <button
                            class="bg-primary hover:bg-primary2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            :class="firstName && lastName && mobile && email && password && confirmPassword && dob ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'"
                            @click="userRegister" type="submit">
                            Sign Up
                        </button>
                    </div>

                    <div class="flex items center justify-between mt-4">
                        <a href="/login" class="text-primary text-sm">Already have an account? Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { userRegister } from '@/API/index.js'

export default {
    name: "SignUp",
    data() {
        return {
            firstName: null,
            lastName: null,
            mobile: null,
            email: null,
            password: null,
            confirmPassword: null,
            dob: null,
            gender: null,

            showPassword: false,
            showConfirmPassword: false,
            verifyMobile: null,
            verifyEmail: null,
            verifyPassword: null,
            passwordMismatch: null,
            error: null,
            userType: 'buyer',
            userTypes: [
                { text: 'Buyer', value: 'buyer' },
                { text: 'Seller', value: 'seller' },
                { text: 'Carrier', value: 'carrier' }
            ],
            // gst: '',
            shopName: '',

            genderOptions: [
                { text: 'Select Gender', value: null },
                { text: 'Male', value: "male" },
                { text: 'Female', value: "female" },
                { text: 'Other', value: "other" }
            ],
        };
    },
    // mounted() {
    //     if (document.cookie.includes('token')) {
    //         this.$router.push('/');
    //     }
    // },
    methods: {
         async userRegister() {
            let user = {
                "first_name": this.firstName,
                "last_name": this.lastName,
                "mobile": this.mobile,
                "email": this.email,
                "password": this.password,
                "dob": this.dob,
                "gender": this.gender,
                // "gst": this.gst,
                // "shopName": this.shopName
            }

            await userRegister(user).then((response) => {
                   if (response.status === 200) {
                        this.$router.push('/login');
                        console.log(response);
                    } else {
                        this.error = response.error;
                        console.log(response);
                    }
                }).catch((error) => {
                    this.error = error;
                    console.log(error);
                });
        },
    },
    watch: {
        mobile: function () {
            const mobileRegex = /^[0-9]{10}$/;
            this.verifyMobile = !mobileRegex.test(this.mobile);
        },
        email: function () {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            this.verifyEmail = !emailRegex.test(this.email);
        },
        password: function () {
            this.verifyPassword = this.password.length < 8;
            if (this.password.length >= 8) {
                const upperCase = /[A-Z]/;
                const lowerCase = /[a-z]/;
                const numbers = /[0-9]/;
                this.verifyPassword = !upperCase.test(this.password) || !lowerCase.test(this.password) || !numbers.test(this.password);
            }
        },
        confirmPassword: function () {
            this.passwordMismatch = this.password !== this.confirmPassword;
        },
    },
};
</script>
