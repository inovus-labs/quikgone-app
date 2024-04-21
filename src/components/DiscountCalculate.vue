<template>
    <div class="max-w-2xl mx-auto">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">Discount Rules</h2>
        <div v-for="(discount, index) in discounts" :key="index" class="border-b border-gray-200 py-4">
          <div class="grid grid-cols-4 gap-4">
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="quantity">
                Quantity
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="text"
                placeholder="Quantity"
                v-model="discount.quantity"
              />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="discount">
                Discount
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="discount"
                type="text"
                placeholder="Discount"
                v-model="discount.discount"
              />
            </div>
            <div>
              <label class="block text-gray-700 font-bold mb-2" for="mode">
                Mode
              </label>
              <select
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mode"
                v-model="discount.mode"
              >
                <option value="percentage">%</option>
                <option value="Rupess">$</option>
              </select>
            </div>
            <div class="flex items-center justify-end">
              <button
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                @click="removeRow(index)"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="addNewRow"
          >
            <svg
              class="w-4 h-4 fill-current inline-block mr-2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Add New Row
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        discounts: [{ quantity: '', discount: '', mode: '%' }],
      };
    },
    methods: {
      addNewRow() {
        this.discounts.push({ quantity: '', discount: '', mode: '%' });
      },
      removeRow(index) {
        this.discounts.splice(index, 1);
      },emitData() {
      this.$emit('discounts-updated', this.discounts); // Emit the discounts data
    },
    },
  };
  </script>