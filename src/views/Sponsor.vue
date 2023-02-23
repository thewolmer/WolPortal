<script setup>
import EthLogo from '../components/icons/Custom/EthLogo.vue'
import Footer from '../components/Footer.vue';
</script>

<template>

  <div class="py-4 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
    <div class="space-y-12  sm:w-9/12 text-neutral-600">
      <header class="space-y-2 my-12 px-4">
        <h1 class="text-gray-700 text-4xl dark:text-neutral-300">Sponsor</h1>
        <p>
          If you like my projects and/or what I do and you want to contribute,
          make me happy, you can donate with the information on this page!
          Thank you ♥
        </p>
        <p class="text-xs">
          P.S. Use "<span class="border-b border-black/10 dark:border-white/10">Karan Roy</span>" as the name of
          your transactions.
        </p>
      </header>
      <section class="space-y-4">
        <h3 class="text-lg text-gray-400 dark:text-neutral-700 px-4 font-medium uppercase">Support Me On</h3>
        <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4"><a
            href="https://buymeacoffee.com/thewolmer?utm_source=wolmer.me" target="_blank" rel="noreferrer noopener"
            class="cursor-pointer flex space-x-2 transition-colors btn items-center justify-center w-full lg:w-max bg-opacity-70 bg-[#ffdd00] text-white  hover:bg-opacity-50 px-4 py-2 rounded sm:w-max "
            data-tippy-directive=""><i class='bx bxs-coffee-togo text-2xl'></i> <span class="font-bold">

              Buy me a coffee
            </span></a> <a href="https://www.patreon.com/thewolmer/?utm_source=wolmer.me" target="_blank"
            rel="noreferrer noopener"
            class="cursor-pointer flex space-x-2 transition-colors btn items-center justify-center w-full lg:w-max bg-[#FF424D] bg-opacity-70 text-white hover:bg-[#FF424D] hover:bg-opacity-50 px-4 py-2 rounded sm:w-max ">
            <i class='bx bxl-patreon text-2xl'></i> <span class="font-bold">

              Become a Patron
            </span>
          </a></div>
      </section>
      <section class="space-y-4 text-neutral-600">
        <h3 class="text-lg text-gray-400 dark:text-neutral-700 px-4 font-medium uppercase">Crypto</h3>
        <p class="px-4">
          Click to copy Address
        </p>
        <div class="flex flex-wrap gap-x-4 gap-y-2 mx-4 ">
    
          <button
          @click="copyeth"
            class="cursor-pointer  flex space-x-2 transition-colors btn items-center justify-center w-full lg:w-max bg-[#1c1c1c] bg-opacity-100 text-white  px-4 py-2 rounded sm:w-max gap-x-7 focus:ring-2 focus:outline-none focus:ring-[#41b883]">
            <div class="justify-start flex gap-2 ">
            <EthLogo class="text-4xl" /> <span class="font-bold">

              Etherium (ERC 20)
              
            </span>
            
          </div>
          <div  class="justify end">
            <i class='bx bx-copy text-xl' style='color:#f5f5f5'> </i>  </div>
          </button>
          </div>
      </section>
      
      
    </div>
  </div>
  <Footer />
</template>

<script>
export default {
  name : 'Sponsor',
  data() {
return{
  ethadd: '0x8fb164bff791b61c7a63eaa586584fa94ef2d562',
  btcadd: '188tYmJkuRKD1q3fj7qmHrcURvEtaKY4Qo'
}
},
methods: {
 copyeth() {
  try {
    navigator.clipboard.writeText(this.ethadd)
  } catch(e) {
    throw e
  }
 },
 copybtc() {
  try {
    navigator.clipboard.writeText(this.ethbtc)
  } catch(e) {
    throw e
  }
 }

}

}
</script>

<style lang="scss" scoped>

</style>