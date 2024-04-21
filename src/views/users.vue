<template>
  <div class="flex h-screen">

    <SidebarNav />



    <div class="relative">
      <table class="w-full border m-24 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Mobile
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          <template v-for="user in users" :key="user.user_id">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ user.first_name + ' ' + user.last_name}}
              </th>
              <td class="px-6 py-4">
                {{user.user_type}}
              </td>
              <td class="px-6 py-4">
                {{ user.email }}
              </td>
              <td class="px-6 py-4">
                {{ user.mobile }}
              </td>
              <td class="px-6 py-4">
                {{ user.status }}
              </td>
            </tr>
          </template>
          
        </tbody>
      </table>
    </div>


  </div>


</template>

<script>
import { getallUsers } from '@/API/index.js';
import SidebarNav from '@/components/reusable/SidebarNav.vue'
export default {
  components: {
    SidebarNav
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await getallUsers();
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>