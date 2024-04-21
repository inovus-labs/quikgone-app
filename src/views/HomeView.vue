<template>
  <Navbar/>   
<!--   
  <div class="p-8 mx-auto max-w-screen-xl mt-9 lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
        <template v-for="item in item" :key="item">
            <ProductCard 
               :item="item"
            />
        </template>
    </div>
    </div> -->
    <div class="py-8 mx-auto max-w-screen-xl mt-8 lg:py-12 lg:px-6">
    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
      <a href="/"> 
        <template v-for="item in items" :key="item.product_id">
          <ProductCard
                :item="item" />
        </template>
      </a>
    </div>
    </div>


</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/reusable/NavBar.vue'
import { getitems } from '@/API/index.js'

export default{
  name: 'HomeView',
  components: {
    ProductCard,
    Navbar
  },
  data(){
        return {
            items: [],
        }
    },
    async mounted() {
        await getitems().then((res) => {
            this.items = res.data;
            // console.log(res.data)
        })
    }

}
</script>
