<template>
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