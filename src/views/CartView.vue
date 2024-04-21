<template>
  <Navbar />
  <div class="max-w-5xl mx-auto py-10">
    <div class="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:justify-between">
      <div class="w-full md:w-2/3 mb-6 md:mb-0 flex flex-col">
        <div class="bg-white border border-gray-300 rounded-lg p-6 flex-grow">
          <h2 class="text-lg font-bold mb-4">Cart Items</h2>
          <div class="divide-y divide-gray-200 flex flex-col flex-grow">
            <div v-for="item in data" :key="item._id" class="flex items-center py-4">
              <img :src="item.images[0]" alt="Product Image" class="w-20 h-20 rounded-md object-cover mr-4" />
              <div class="flex-grow">
                <h3 class="text-lg font-semibold">{{ item.product_name }}</h3>
                <p>₹{{ item.price }}</p>
                <div class="flex items-center mt-2">
                  <button @click="decrementQuantity(item)"
                    class="border border-gray-300 font-bold py-1 px-2 rounded-l focus:outline-none hover:bg-gray-200">
                    -
                  </button>
                  <input type="text" v-model="item.qty"
                    class="w-12 text-center border-t border-b border-gray-300 focus:outline-none" readonly />
                  <button @click="incrementQuantity(item)"
                    class="border border-gray-300 font-bold py-1 px-2 rounded-r focus:outline-none hover:bg-gray-200">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-4 w-full  flex flex-col">
        <div class="bg-white border border-gray-300 rounded-lg p-6 flex-grow">
          <h2 class="text-lg font-bold mb-4">Order Summary</h2>
          <div class="divide-y divide-gray-200 flex flex-col flex-grow">
            <div class="flex justify-between py-2">
              <span>Subtotal</span>
              <span>₹{{ subtotal }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Shipping</span>
              <span>₹{{ shippingCost }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Tax</span>
              <span>₹{{ tax }}</span>
            </div>
            <div class="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>₹{{ total }}</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Discount</span>
              <span>-₹{{ discount }}</span>
            </div>
          </div>
          <button
            class="bg-primary text-white font-bold py-3 px-6 rounded-md w-full mt-6 focus:outline-none hover:bg-primary2 transition-colors duration-300"
            @click="buyNow">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { GetCart } from '@/API/index.js';
import Navbar from '@/components/reusable/NavBar.vue'
import Footer from '@/components/reusable/FooterView.vue'



export default {
  components:{
    Navbar,
    Footer
  },
  data() {
    return {
      data: [],
      shippingCost: 4.99,
      taxRate: 0.06,
    };
  },
  computed: {
    subtotal() {
      return this.data.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
    tax() {
      return this.subtotal * this.taxRate;
    },
    total() {
      return this.subtotal + this.shippingCost + this.tax - this.discount;
    },
    discount() {
      return this.data.reduce(
        (total, item) => total + item.discount.reduce(
          (discountTotal, discountItem) =>
            discountTotal + (discountItem.min_qty <= item.qty ? item.price * discountItem.discount : 0),
          0
        ),
        0
      );
    },
  },
  async mounted() {
    await this.Getdata();
  },
  methods: {
    async Getdata() {
      await GetCart({})
        .then((response) => {
          this.data = response.cart;
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    incrementQuantity(item) {
      item.qty++;
    },
    decrementQuantity(item) {
      if (item.qty > 1) {
        item.qty--;
      } else {
        this.removeFromCart(item);
      }
    },
    removeFromCart(item) {
      this.data = this.data.filter((cartItem) => cartItem._id !== item._id);
    },
    buyNow() {
      alert("Buy Now functionality not implemented yet");
    },
  },
};
</script>