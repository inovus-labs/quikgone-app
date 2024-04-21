<template>

  <Navbar />
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
              <a href="#all"
                class="inline-flex items-center px-4 py-2 border border-transparent bg-primary2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-primary">
                Shop Now
              </a>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-800">Featured Products...</h2>
            <div class="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">

              <template v-if="items">
                <template v-for="item in items.slice(0, 4)" :key="item.product_id">
                  
                  <div class="p-2">
                    <ProductCard :item="item" />
                  </div>
                  
                </template>
              </template>
              <div v-else>No products found.</div>
              
            </div>
          </div>
          <div class="mt-8 h-64 bg-primary2 rounded-xl">
            <h1 class="text-center h-full flex items-center justify-center">Advertisement Section</h1>
          </div>

          <div class="mt-8">
            <h2 class="text-2xl font-bold text-gray-800" id="all">All Products...</h2>
            <div class="mt-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

              <template v-if="items">
                <template v-for="item in items.slice(0,4)" :key="item.product_id">
                  
                  <div class="p-2">
                    <ProductCard :item="item" />
                  </div>
                  
                </template>
              </template>
              <div v-else>No products found.</div>
              
            </div>
          </div>

        </div>
      </div>
    </main>

</div>


<Footer />


</template>
<script>

import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/reusable/NavBar.vue'
import { getitems, getMyDetails } from '@/API/index.js'
import Footer from '@/components/reusable/FooterView.vue'


export default{
  name: "Home",
  components: {
    ProductCard,
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
      this.getUserDetail();
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  },
  methods: {
    async getUserDetail() {
      await getMyDetails().then((response) => {
          console.log(response);
          localStorage.setItem('user', JSON.stringify(response.data));
      });
    }
  }
}

</script>

