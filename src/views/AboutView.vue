
<template>

<Navbar />

    
    <section class="bg-white">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">
        <img src="/assets/Logo with name.svg" class="h-64" alt="Flowbite Logo" />
      </div>
    </section>



    
    
    
    <section class="bg-bgPrimary dark:bg-gray-900 pb-10 px-4">
        <div class="">
          <h1 class="font-bold p-5 text-2xl">About QuikGone</h1>
          <p class="py-1 px-10 text-border font-medium">
            At QuikGone, we are committed to revolutionizing the perishable goods marketplace, offering a transformative solution to the age-old challenge of managing commodities with impending expiry dates. Our innovative online platform serves as a beacon of efficiency and sustainability, providing a dynamic space where sellers and buyers converge to unlock the latent value of perishable items.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            Driven by a passion for efficiency and a dedication to sustainability, QuikGone stands as a beacon of innovation in the e-commerce landscape. Our platform embodies the convergence of cutting-edge technology and a deep-rooted commitment to addressing critical societal and economic challenges.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            At the heart of QuikGone lies a profound understanding of the inherent complexities surrounding perishable goods. Traditional marketplaces often struggle to cope with the swift turnover of such items, leading to significant losses for sellers and missed opportunities for buyers. Recognizing this gap, QuikGone emerges as a beacon of hope, offering a streamlined avenue for sellers to swiftly clear their stock before it reaches its expiration, thus minimizing waste and maximizing value.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            Our platform is more than just a marketplace; it's a testament to the power of innovation in driving positive change. Powered by state-of-the-art technologies such as Vue.js, Node.js, and MongoDB, QuikGone boasts a robust infrastructure that ensures seamless navigation, efficient inventory management, and unparalleled user experience.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            QuikGone's commitment to sustainability extends beyond the mere exchange of goods; it embodies a holistic ethos aimed at minimizing waste and maximizing resource utilization. Through our intelligent product visibility system, we ensure that every commodity finds its purpose, whether destined for human consumption or alternative uses such as animal feed, thereby minimizing food waste and promoting sustainability.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            Moreover, QuikGone's revenue model not only ensures profitability but also fosters community participation and economic empowerment. Our platform provides income opportunities for individuals interested in earning extra income by participating as delivery collaborators, thus fostering economic inclusivity and empowerment.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            At QuikGone, trust and integrity are paramount. We uphold the highest standards of privacy and transparency, ensuring that every transaction is conducted with the utmost integrity and accountability. Our stringent privacy policies and robust security measures provide users with peace of mind, fostering a community built on trust and mutual respect.
          </p>
          <p class="py-1 px-10 text-border font-medium">
            In essence, QuikGone is not just a marketplace; it's a movement. A movement towards a more sustainable, efficient, and inclusive future, where every commodity is valued, and every opportunity is seized. Join us in our mission to revolutionize the perishable goods marketplace and pave the way for a brighter tomorrow. Welcome to QuikGone, where every moment counts, and every commodity finds its purpose.
          </p>
        </div>
    </section>
  
  <Footer />
</template>


<script>
import Navbar from '@/components/reusable/NavBar.vue'
import Footer from '@/components/reusable/FooterView.vue'

  export default {
    name: 'AboutView',
    components:{
      Navbar,
      Footer
    },
  }
</script>