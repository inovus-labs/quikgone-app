<template>
    <div class="max-w-7xl mx-auto py-10">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Your Shopping Cart</h1>
        <div class="flex flex-col md:flex-row md:justify-between">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-bold mb-4 text-gray-800">Cart Items</h2>
              <div class="divide-y divide-gray-200">
                <div
                  v-for="item in cartItems"
                  :key="item.id"
                  class="flex items-center py-4"
                >
                  <img
                    :src="item.image"
                    alt="Product Image"
                    class="w-20 h-20 rounded-md object-cover mr-4"
                  />
                  <div class="flex-grow">
                    <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
                    <p class="text-gray-600">${{ item.price }}</p>
                    <div class="flex items-center mt-2">
                      <button
                        @click="decrementQuantity(item)"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded-l focus:outline-none"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        v-model="item.quantity"
                        class="w-12 text-center bg-gray-200 focus:outline-none"
                        readonly
                      />
                      <button
                        @click="incrementQuantity(item)"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded-r focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-bold mb-4 text-gray-800">Order Summary</h2>
              <div class="divide-y divide-gray-200">
                <div class="flex justify-between py-2">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="text-gray-800 font-semibold">${{ subtotal }}</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-gray-600">Shipping</span>
                  <span class="text-gray-800 font-semibold">${{ shippingCost }}</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-gray-600">Tax</span>
                  <span class="text-gray-800 font-semibold">${{ tax }}</span>
                </div>
                <div class="flex justify-between py-2 font-bold">
                  <span class="text-gray-800">Total</span>
                  <span class="text-gray-800">${{ total }}</span>
                </div>
              </div>
              <button
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none"
                @click="buyNow"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
          },
          {
            id: 2,
            name: "Product Name 2",
            price: 79.99,
            image: "https://via.placeholder.com/100x100",
            quantity: 2,
          },
          {
            id: 2,
            name: "Product Name 2",
            price: 79.99,
            image: "https://via.placeholder.com/100x100",
            quantity: 2,
          },
          // Add more cart items here
        ],
        shippingCost: 4.99,
        taxRate: 0.06, // 6% tax rate
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
        return this.subtotal + this.shippingCost + this.tax;
      },
    },
    methods: {
      incrementQuantity(item) {
        item.quantity++;
      },
      decrementQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      },
      buyNow() {
        // Handle the "Buy Now" functionality here, e.g., redirect to a checkout page
        alert("Buy Now functionality not implemented yet");
      },
    },
  };
  </script>