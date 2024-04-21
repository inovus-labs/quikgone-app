<template>
    <a :href="item.product_id">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
          <img class="rounded-t-lg p-3" src="/assets/image-1.jpg" alt="" />
        
        <div class="p-5">
          
            <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">{{ item.product_name }}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rs.{{ item.price }}</h5>
    
          <p class="mb-3 font-normal text-gray-700 text-primary2 dark:text-gray-400">
            <span class="text-border line-through"></span> {{item.discount.discount }}% off
          </p>
          <p class="mb-3 font-normal text-gray-700 text-gray dark:text-gray-400">Product expire by {{ item.expiry_date }}</p>
        </div>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      item: {
        type: Object,
        required: true,
      }
    },
    mounted() {
      console.log(item.product_name)
    }
  }
  </script>