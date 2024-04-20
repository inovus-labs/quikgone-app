<template>
  <Navbar/>   

  <ProductCard />

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/reusable/NavBar.vue'

export default{
  name: 'HomeView',
  components: {
    ProductCard,
    Navbar
  }

}
</script>
