<template>
  <div class="max-w-5xl mx-auto py-10">
    <div class="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:justify-between">
      <div class="w-full md:w-2/3 mb-6 md:mb-0 flex flex-col">
        <div class="bg-white border border-gray-300 rounded-lg p-6 flex-grow">
          <h2 class="text-lg font-bold mb-4">Cart Items</h2>
          <div class="divide-y divide-gray-200 flex flex-col flex-grow">
            <div v-for="item in cartItems" :key="item.id" class="flex items-center py-4">
              <img :src="item.image" alt="Product Image" class="w-20 h-20 rounded-md object-cover mr-4" />
              <div class="flex-grow">
                <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                <p>₹{{ item.price }}</p>
                <div class="flex items-center mt-2">
                  <button @click="decrementQuantity(item)"
                    class="border border-gray-300 font-bold py-1 px-2 rounded-l focus:outline-none hover:bg-gray-200">
                    -
                  </button>
                  <input type="text" v-model="item.quantity"
                    class="w-12 text-center border-t border-b border-gray-300 focus:outline-none" readonly />
                  <button @click="incrementQuantity(item)"
                    class="border border-gray-300 font-bold py-1 px-2 rounded-r focus:outline-none hover:bg-gray-200">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-4 w-full  flex flex-col">
        <div class="bg-white border border-gray-300 rounded-lg p-6 flex-grow">
          <h2 class="text-lg font-bold mb-4">Order Summary</h2>
          <div class="divide-y divide-gray-200 flex flex-col flex-grow">
            <div class="flex justify-between py-2">
              <span>Subtotal</span>
              <span>₹{{ subtotal }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Shipping</span>
              <span>₹{{ shippingCost }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Tax</span>
              <span>₹{{ tax }}</span>
            </div>
            <div class="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>₹{{ total }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Discount</span>
              <span>-₹{{ discount }}</span>
            </div>
          </div>
          <button
            class="bg-primary text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none hover:bg-primary2 transition-colors duration-300"
            @click="buyNow">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetCart } from '@/API/index.js';

  export default {
    data() {
      return {
        cartItems: [
          {
            id: 1,
            name: "Product Name 1",
            price: 59.99,
            image: "https://via.placeholder.com/100x100",
            quantity: 1,
            discount: 5.99, // Example discount for this product
          },
          {
            id: 2,
            name: "Product Name 2",
            price: 79.99,
            image: "https://via.placeholder.com/100x100",
            quantity: 2,
            discount: 0, // No discount for this product
          },
          {
            id: 3,
            name: "Product Name 3",
            price: 49.99,
            image: "https://via.placeholder.com/100x100",
            quantity: 1,
            discount: 2.49, // Example discount for this product
          },
        ],
        shippingCost: 4.99,
        taxRate: 0.06,
      };
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      tax() {
        return this.subtotal * this.taxRate;
      },
      total() {
        return this.subtotal + this.shippingCost + this.tax - this.discount;
      },
      discount() {
        return this.cartItems.reduce(
          (total, item) => total + item.discount * item.quantity,
          0
        );
      },
    },async mounted() {
      await this.Getdata();
      console.log("asas");
    },
    methods: {

      async Getdata(){
        await GetCart({}).then((response)=>{
          console.log(response);
        }).catch((error) =>{
          console.log(error);
        })
      },

      incrementQuantity(item) {
        item.quantity++;
      },
      decrementQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(item);
        }
      },
      removeFromCart(item) {
        this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
      },
      buyNow() {
        alert("Buy Now functionality not implemented yet");
      },
    },
  };
</script>