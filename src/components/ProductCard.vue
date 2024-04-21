<template>
  <a :href="item.product_id">
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <img class="rounded-t-lg p-3 h-72 w-full object-cover object-center" :src="item.images[0]" alt="product image" />

      <div class="p-5">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.product_name }}</h5>
        <h6 class="mb-2 text-gray-900 dark:text-white">{{ item.product_desc }}</h6>

        <div class="flex items-center justify-between mb-2">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">₹ {{ item.price }}.00</h5>
          <p class="mb-3 font-bold text-gray-700 text-primary2 dark:text-gray-400">
            <span class="text-border line-through"></span> 26% off
          </p>
        </div>
        <p class="mb-3 font-normal text-gray-700 text-gray dark:text-gray-400">Product expire on <span class="font-bold">{{ formattedExpiryDate }}</span></p>
      </div>
    </div>
  </a>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  computed: {
    formattedExpiryDate() {
      const expiryDate = new Date(this.item.expiry_date);
      return format(expiryDate, 'MMMM d, yyyy');
    },
  },
  // mounted() {
  //   console.log(this.item.product_name)
  // }
}
</script>