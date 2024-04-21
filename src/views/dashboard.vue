<template>
    <div class="flex h-screen">
    
    <SidebarNav />
    <div class="flex-1 p-6 bg-gray-100">
  <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div class="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold mb-2">Total Users</h3>
        <p class="text-4xl font-bold">12,345</p>
      </div>
      <div class="text-green-500">
        <svg
          class="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
        <span class="ml-2">10.5%</span>
      </div>
    </div>
    <div class="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold mb-2">Total Products</h3>
        <p class="text-4xl font-bold">5,678</p>
      </div>
      <div class="text-red-500">
        <svg
          class="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          ></path>
        </svg>
        <span class="ml-2">2.8%</span>
      </div>
    </div>
    <div class="bg-white shadow-md rounded-md p-6 flex flex-col justify-between">
      <div>
        <h3 class="text-lg font-bold mb-2">Total Orders</h3>
        <p class="text-4xl font-bold">34,567</p>
      </div>
      <div class="text-green-500">
        <svg
          class="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
        <span class="ml-2">15.2%</span>
      </div>
    </div>
  </div>
</div>
</div>

     
      </template>

<script>
import SidebarNav from '@/components/reusable/SidebarNav.vue'
export default {
    components:{
        SidebarNav
    },
  data() {
    return {
      totalUsers: 12345,
      totalProducts: 5678,
      totalOrders: 34567,
    };
  },
};
</script>