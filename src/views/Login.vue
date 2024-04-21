<template>
    <div class="h-screen flex flex-col md:flex-row">
        <!-- Side Section -->
        <div class="bg-bgprimary text-white md:w-1/3 md:flex-1 flex items-center justify-center">
            <div>
                //<h2 class="pt-5 text-3xl md:text-4xl font-bold mb-4 text-center">Welcome</h2>
                <img src="@/assets/logo/logo.svg" alt="">
            </div>
        </div>

        <!-- Content Section -->
        <div class=" flex justify-center bg-primary2 items-center md:w-1/3 md:flex-1">
            <div class="w-full  max-w-md px-4">
                <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
                <form @submit.prevent="handleLogin" class="bg-bgSecondary  shadow-md rounded px-4 pt-6 pb-8">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="email">
                            Email Address
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Enter your email address" v-model="email" required />
                    </div>
                    <div class="mb-4 relative">
                        <label class="block text-gray-700 font-bold mb-2" for="password">
                            Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                            :type="showPassword ? 'text' : 'password'" id="password" placeholder="Enter your password"
                            v-model="password" required />
                        <button type="button"
                            class="absolute inset-y-0 right-0 mt-8 mr-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                            @click="togglePasswordVisibility">

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
                    <p v-if="wrongPassword" class="text-center text-red-500 text-sm">The password is wrong</p>
                    <p v-if="HaveID" class="text-center text-red-500 text-sm">There is something wrong in your input!
                    </p>
                    <div class="flex items-center justify-between">
                        <button @click="userLog"
                            class="bg-primary hover:bg-primary2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit">
                            Login
                        </button>

                    </div>
                    <button @click="signupPage"
                        class="ml-40 pl-2 pt-2 place-items-center  text-primary text-sm">SignUp</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { userLogin } from '@/API/index.js'

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            showPassword: false,
            HaveID: false,
            wrongPassword: false,
        };
    },
    methods: {
        handleLogin() {
            // Handle login logic here
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
            const passwordInput = document.getElementById('password');
            passwordInput.type = this.showPassword ? 'text' : 'password';
        },
        signupPage() {
            this.$router.push({
                path: '/signup'
            });
        },
        async userLog() {
            let user = {
                "email": this.email,
                "password": this.password,
            }

            let response = await userLogin(user);
            console.log(response);

            if (response.status == 200) {
                
                document.cookie = "token=" + response.token;
                window.location.href = "/";
                
            } else if (response.response.status === 401) {
                this.wrongPassword = true;
                console.log("401 - wrong pass");
            } else {
                console.log("error");
                this.HaveID = true;
            }
        },
    }
};
</script>

<style scoped>
@media (max-width: 768px) {
    .flex-col {
        flex-direction: column;
        padding-top: 200px;
    }
}
</style>
