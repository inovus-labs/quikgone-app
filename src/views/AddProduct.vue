  <template>
    <Navbar />
    <div class="flex justify-center items-center min-h-screen bg-primary2">
      <div class="bg-white rounded-lg shadow-2xl p-8 w-full max-w-6xl">
        <h2 class="text-3xl font-bold mb-8 text-center text-primary">Add New Product</h2>
        <form @submit.prevent="addProduct" class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label for="product_name" class="block mb-2 font-semibold text-gray-700 text-center md:text-left">Product Name</label>
            <input type="text" id="product_name" v-model="newProduct.product_name" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          
          <div>
            <label for="product_qty" class="block mb-2 font-semibold text-gray-700">Product Quantity</label>
            <input type="number" id="product_qty" v-model="newProduct.product_qty" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>

          <div>
            <label for="product_unit" class="block mb-2 font-semibold text-gray-700">Product Unit</label>
            <input type="text" id="product_unit" v-model="newProduct.product_unit" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>

          <div>
            <label for="product_category" class="block mb-2 font-semibold text-gray-700">Product Category</label>
            <input type="text" id="product_category" v-model="newProduct.product_category" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>

          <div class="md:col-span-3">
            <label for="description" class="block mb-2 font-semibold text-gray-700">Product Description</label>
            <textarea id="description" v-model="newProduct.product_desc" rows="3" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div class="w-full md:col-span-1">
            <label for="price" class="block mb-2 font-semibold text-gray-700">Product Price</label>
            <div class="relative">
              <input type="number" id="price" v-model="newProduct.price" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span class="absolute right-2 top-2 text-gray-500">₹</span>
            </div>
          </div>

          <div class="md:col-span-3">
            <label for="image" class="block mb-2 font-semibold text-gray-700">Product Image</label>
            <input type="file" id="image" @change="handleImageUpload"
                  class="pr-14 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>

          <div class="md:col-span-3">
            <DiscountCalculate v-model="newProduct.discount" ref="discountComponent" />
          </div>

          <p v-if="message" class="text-center text-red-500 mb-4 text-sm">{{ message }}</p>
          <div class="md:col-span-3 flex justify-center">
            <button type="submit"
                    class="bg-primary2 hover:bg-primary text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
    <AppFooter />
  </template>

  <script>
  import { getitems } from '@/API/index.js'
  import DiscountCalculate from '@/components/DiscountCalculate.vue'
  import Navbar from '@/components/reusable/NavBar.vue'
  import AppFooter from '@/components/reusable/FooterView.vue'

  export default {
    data() {
      return {
        newProduct: {
          product_name: '',
          product_desc: '',
          product_qty: '',
          product_unit: '',
          product_category: '',
          price: '',
          images: [],
          discount: []
        },
        message: null
      }
    },
    components: {
      DiscountCalculate,
      Navbar,
      AppFooter
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$refs.discountComponent) {
          const discountData = this.$refs.discountComponent.getDiscountData();
          const formattedDiscount = discountData.map(discount => ({
            min_qty: discount.min_qty,
            discount: discount.discount,
            mode: discount.mode
          }));
          this.newProduct.discount = formattedDiscount;
        }
      });
    },
    methods: {
      async addProduct() {
        try {
          const response = await getitems({
            product_name: this.newProduct.product_name,
            product_desc: this.newProduct.product_desc,
            product_qty: this.newProduct.product_qty,
            product_unit: this.newProduct.product_unit,
            product_category: this.newProduct.product_category,
            price: this.newProduct.price,
            images: this.newProduct.images,
            discount: this.newProduct.discount
          });

          if (response.status === 200) {
            this.message = "Product Added Successfully";
          } else if (response.status === 400) {
            this.message = "Product Already Exists";
          }
        } catch (error) {
          console.error(error);
          this.message = "An error occurred while adding the product.";
        }
      },
      handleImageUpload(event) {
        this.newProduct.images = Array.from(event.target.files);
      }
    }   
  }
  </script>