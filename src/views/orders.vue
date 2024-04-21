<template>
  <div class="flex h-screen">

    <SidebarNav />



    <div class="relative">
      <table class="w-full border m-24 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Buyer
            </th>
            <th scope="col" class="px-6 py-3">
              Seller
            </th>
            <th scope="col" class="px-6 py-3">
              Total Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Created At
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          <template v-for="order in orders" :key="order.order_id">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ order.buyer_id }}
              </th>
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ order.seller_id }}
              </td>
              <td class="px-6 py-4">
                {{ "₹ " + order.total_price }}
              </td>
              <td class="px-6 py-4">
                {{ order.created_at }}
              </td>
              <td class="px-6 py-4">
                {{ order.order_status }}
              </td>
            </tr>
          </template>
          
        </tbody>
      </table>
    </div>


  </div>


</template>

<script>
import { getallOrders } from '@/API/index.js';
import SidebarNav from '@/components/reusable/SidebarNav.vue'
export default {
  components: {
    SidebarNav
  },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      try {
        const response = await getallOrders();
        this.orders = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>