<template>
<<<<<<< HEAD
  <Navbar/>   
  <div class="min-h-screen bg-gray-100">

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="text-center md:text-left">
              <h1 class="text-4xl font-bold text-gray-800">Welcome to Your Shop</h1>
              <p class="mt-2 text-lg text-gray-600">Discover the best products for you</p>
            </div>
            <div class="mt-6 md:mt-0">
              <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Shop Now
              </a>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-800">Featured Products</h2>
            <div class="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div v-for="product in featuredProducts" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                <img :src="product.imageUrl" :alt="product.name" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
                  <p class="mt-2 text-gray-600">{{ product.description }}</p>
                  <div class="mt-4 flex justify-between items-center">
                    <span class="text-xl font-bold text-gray-800">${{ product.price }}</span>
                    <button class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>


  <Navbar />
  <div class="py-8 mx-auto max-w-screen-xl mt-8 lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
      <template v-if="items && items.length">
        <template v-for="item in items" :key="item.product_id">
          <div class="p-2">
            <ProductCard :item="item" />
          </div>
        </template>
      </template>
      <div v-else>No products found.</div>
    </div>
  </div>
  <Footer />

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/reusable/NavBar.vue'
import { getitems } from '@/API/index.js'
import Footer from '@/components/reusable/FooterView.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
<<<<<<< HEAD
    Navbar
  }, data() {
    return {
      currentYear: new Date().getFullYear(),
      featuredProducts: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is a sample product description.',
          price: 19.99,
          imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is another sample product description.',
          price: 24.99,
          imageUrl: 'https://via.placeholder.com/300x200',
        },
        // Add more featured products here
      ],
    };

    Navbar,
    Footer

  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    try {
      const response = await getitems()
      this.items = response.data.data
      // console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }
}

</script>




