<template>
    <div class="flex justify-center items-center min-h-screen bg-primary2">
      <div class="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
        <h2 class="text-3xl font-bold mb-8 text-center text-primary">Add New Product</h2>
        <form @submit.prevent="addProduct" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="product_name" class="block mb-2 font-semibold text-gray-700">Product Name</label>
            <input type="text" id="product_name" v-model="newProduct.product_name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label for="product_qty" class="block mb-2 font-semibold text-gray-700">Product Quantity</label>
            <input type="number" id="product_qty" v-model="newProduct.product_qty" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label for="product_owner" class="block mb-2 font-semibold text-gray-700">Product Owner</label>
            <input type="email" id="product_owner" v-model="newProduct.product_owner" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label for="product_category" class="block mb-2 font-semibold text-gray-700">Product Category</label>
            <input type="text" id="product_category" v-model="newProduct.product_category" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label for="seller_id" class="block mb-2 font-semibold text-gray-700">Seller ID</label>
            <input type="email" id="seller_id" v-model="newProduct.seller_id" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div>
            <label for="expiry_date" class="block mb-2 font-semibold text-gray-700">Expiry Date</label>
            <input type="date" id="expiry_date" v-model="newProduct.expiry_date" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="md:col-span-2">
            <label for="image" class="block mb-2 font-semibold text-gray-700">Product Image</label>
            <input type="file" id="image" @change="handleImageUpload" required class=" pr-28 border border-gray-300 rounded-xxl focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="md:col-span-2 flex justify-center">
            <button type="submit" class="bg-primary2 hover:bg-primary text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          product_name: '',
          product_qty: '',
          product_owner: '',
          product_category: '',
          seller_id: '',
          expiry_date: '',
          image: null
        }
      }
    },
    methods: {
      addProduct() {
        // Here, you can write the code to send the newProduct data to your server or perform any other necessary actions.
        console.log(this.newProduct);
        // Reset the form after submission
        this.resetForm();
      },
      handleImageUpload(event) {
        this.newProduct.image = event.target.files[0];
      },
      resetForm() {
        this.newProduct = {
          product_name: '',
          product_qty: '',
          product_owner: '',
          product_category: '',
          seller_id: '',
          expiry_date: '',
          image: null
        };
      }
    }
  }
  </script>
  