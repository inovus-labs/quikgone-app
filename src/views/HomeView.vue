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


</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/reusable/NavBar.vue'

export default{
  name: 'HomeView',
  components: {
    ProductCard,
    Navbar
  },
  // data(){
  //       return {
  //           users: [],
  //       }
  //   },
  //   async mounted() {
  //       await getitem().then((data) => {
  //           this.item = data.item;
  //       })
  //   }

}
</script>
