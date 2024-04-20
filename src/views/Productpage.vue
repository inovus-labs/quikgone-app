<template>
  <div class="max-w-7xl mx-auto py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="product-images">
        <div class="relative">
          <img
            :src="product.mainImage"
            alt="Main Product Image"
            class="w-full object-cover rounded-lg shadow-lg"
          />
          <button
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
            @click="prevImage"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300"
            @click="nextImage"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <!-- <div class="thumbnails flex justify-center mt-4">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            alt="Thumbnail"
            @click="updateMainImage(image)"
            class="w-16 h-16 object-cover rounded-md shadow-md mx-2 cursor-pointer"
          />
        </div> -->
      </div>
      <div class="product-info">
        <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="product-price text-2xl font-semibold mb-4">{{ formatPrice(product.price) }}</p>
        <p class="product-description mb-6">{{ product.description }}</p>
        <div class="product-options mb-6">
          <div v-for="(option, index) in product.options" :key="index" class="mb-4">
            <label class="font-semibold">{{ option.label }}</label>
            <select
              v-model="selectedOptions[option.name]"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option
                v-for="(value, optionIndex) in option.values"
                :key="optionIndex"
                :value="value"
              >
                {{ value }}
              </option>
            </select>
          </div>
        </div>
        <div class="product-quantity flex items-center mb-6">
          <label class="font-semibold mr-4">Quantity:</label>
          <input
            type="number"
            v-model.number="quantity"
            min="1"
            class="w-20 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          @click="addToCart"
          class="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
        <div class="product-details-tabs mt-12">
          <ul class="tabs flex border-b border-gray-200">
            <li
              v-for="(tab, index) in tabs"
              :key="index"
              :class="[
                'px-4 py-2 cursor-pointer',
                currentTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500',
              ]"
              @click="currentTab = tab"
            >
              {{ tab }}
            </li>
          </ul>
          <div class="tab-content p-6">
            <div v-if="currentTab === 'Description'">
              <p>{{ product.description }}</p>
            </div>
            <div v-else-if="currentTab === 'Specifications'">
              <ul class="list-disc pl-6">
                <li v-for="(spec, index) in product.specifications" :key="index">
                  {{ spec.label }}: {{ spec.value }}
                </li>
              </ul>
            </div>
            <div v-else-if="currentTab === 'Reviews'">
              <div v-for="(review, index) in product.reviews" :key="index" class="mb-4">
                <p class="text-lg font-semibold">{{ review.rating }} stars</p>
                <p>{{ review.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Product Name',
        price: 29.99,
        description: 'Product description goes here...',
        mainImage: 'https://via.placeholder.com/500x500',
        images: [
          'https://via.placeholder.com/500x500',
          'https://via.placeholder.com/500x500?text=Image+2',
          'https://via.placeholder.com/500x500?text=Image+3',
        ],
        options: [
          {
            name: 'size',
            label: 'Size',
            values: ['Small', 'Medium', 'Large'],
          },
          {
            name: 'color',
            label: 'Color',
            values: ['Red', 'Blue', 'Green'],
          },
        ],
        specifications: [
          { label: 'Dimension', value: '10 x 5 x 2 inches' },
          { label: 'Weight', value: '1 lb' },
          { label: 'Material', value: 'Plastic' },
        ],
        reviews: [
          { rating: 4, comment: 'Great product!' },
          { rating: 3, comment: 'It\'s okay, could be better.' },
          { rating: 5, comment: 'Highly recommended!' },
        ],
      },
      selectedOptions: {
        size: 'Medium',
        color: 'Red',
      },
      quantity: 1,
      currentTab: 'Description',
      tabs: ['Description', 'Specifications', 'Reviews'],
    };
  },
  methods: {
    formatPrice(price) {
      return '$' + price.toFixed(2);
    },
    updateMainImage(image) {
      this.product.mainImage = image;
    },
    prevImage() {
      const currentIndex = this.product.images.indexOf(this.product.mainImage);
      const prevIndex = (currentIndex - 1 + this.product.images.length) % this.product.images.length;
      this.product.mainImage = this.product.images[prevIndex];
    },
    nextImage() {
      const currentIndex = this.product.images.indexOf(this.product.mainImage);
      const nextIndex = (currentIndex + 1) % this.product.images.length;
      this.product.mainImage = this.product.images[nextIndex];
    },
    addToCart() {
      // Add the selected product to the cart
      const cartItem = {
        ...this.product,
        selectedOptions: { ...this.selectedOptions },
        quantity: this.quantity,
      };
      // Dispatch an action or mutation to add the item to the cart
      // this.$store.dispatch('addToCart', cartItem);
    },
  },
};
</script>