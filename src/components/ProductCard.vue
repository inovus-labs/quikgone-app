<template>
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg p-3" src="/assets/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">{{ item.product_name }}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rs.500</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 text-primary2 dark:text-gray-400"> <span class="text-border line-through">Rs.600</span> 26% off</p>
        <p class="mb-3 font-normal text-gray-700 text-gray dark:text-gray-400">Product expire by {{ item.expiry_date }}</p>
    </div>
</div>


</template>

<script>
export default{
    name: 'ProductCard',
    props:{
        item:{
            type: Object,
            required: true,
        }
    }
    
}  
                       
</script>