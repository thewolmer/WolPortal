<template>
<footer class="p-4 rounded-lg font-poppin shadow md:px-6 md:py-8 bg-neutral-800 text-gray-200 bg-grad">
    <div class="container mx-auto  pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
    <div class="sm:flex sm:items-center sm:justify-between mb-10">
        <RouterLink to="/" class="flex items-center mb-4 sm:mb-0">
            <img src="../assets/cd/wollogovec.png" loading="lazy" class="mr-3 h-8 animate-spin-slow" alt="Flowbite Logo" />
            <span class=" self-center text-2xl font-semibold whitespace-nowrap text-white">WOLMER</span>
        </RouterLink>
        <!-- <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul> -->
    </div>
    <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <span class="block text-sm sm:text-center text-gray-400">This Website is Open Source <a href="https://github.com/thewolmer/WolPortal" class=" linked-white ">on Github</a>. 
    </span>
</div>
</footer>


    
</template>

<script>
export default {
    name: 'Footer'
}
</script>
