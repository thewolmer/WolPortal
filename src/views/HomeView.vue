<script setup>

import Projects from '../components/Projects.vue'
import TechUsed from '../components/TechUsed.vue'
import Lanyard from '../components/Lanyard.vue'
import ContentGrid from '../components/ContentGrid.vue';
import LinkTab from '../components/LinkTab.vue';
</script>

<template>
  <main class="space-y-14 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
    <header class="rounded-md flex flex-col-reverse my-16 mx-4  py-10 justify-between md:flex-row md:items-center">
      <div id="top" class="md:w-8/12">
        <div class="space-y-2">
          <div class="font-semibold text-xl  md:text-3xl text-neutral-200">
            <h1>Self taught</h1>
            <h1><a href="https://www.w3schools.com/whatis/whatis_frontenddev.asp?utm_source=wolmer.me" target="_blank"
                rel="noreferrer noopener"
                class="cursor-help border-b-2 font-poppin border-neutral-500 text-neutral-500">Frontend</a>
              web developer
              <br> and a Web3 enthusiast 
            </h1>
          </div>
          <p class=" text-wolgray font-poppin">
            Hi there, My e-name is Wolmer. I am a 
            self taught web developer based in India. I build complex web apps using frameworks like
            <a href="https://vuejs.org/?utm_source=wolmer.me" target="_blank" rel="noreferrer noopener"
            class="description-link linked-white">Vue.js</a>,
            <a href="https://reactjs.org/?utm_source=wolmer.me" target="_blank" rel="noreferrer noopener"
            class="description-link linked-white">React.js</a>
            and
            <a href="https://tailwindcss.com/?utm_source=wolmer.me" target="_blank" rel="noreferrer noopener"
            class="description-link linked-white">Tailwind CSS</a>.
          </p>
        </div>
        <div class="mt-4 text-neutral-500"> 
         
          <Lanyard /> 
        
       
        </div>
    <LinkTab />

      </div>

      
      
      
      
      <div class="rounded-full mb-4 md:mb-0">
        <div smart-image="true" id="pfp-bg" class="block rounded-full shadow-md shadow-wolgray mx-auto -mt-16 h-48 w-48 bg-cover bg-center select-none">
          <!-- <img src="./src/assets/cd/icon.png" alt="image" loading="lazy" class="invisible">  -->
        </div>
      </div>
    </header>
    
    <section id="me" class="my-16">
      <h3 class="text-lg font-poppin font-bold text-neutral-700 px-4  uppercase">Me</h3>
      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <RouterLink to="repos">
        <ContentGrid
          descrip="Want to see and/or contribute to my code and public repositories? See the list of my projects and open source code here."
          title="Repositories" />
        </RouterLink>
        <RouterLink to="sponsor">
        <ContentGrid
          descrip="Want to support me and my work, so that i can create more cool stuff? Consider donating money via subscription or crypto."
          title="Sponsor" />
        </RouterLink>
        <RouterLink to="connect">
        <ContentGrid
          descrip="Need help with anything? Want to get in touch? Send me a message!"
          title="Contact" />
        </RouterLink>
      </div>
    </section>
    <Projects />
    <TechUsed />

  </main>
  <div class="w-full py-4 bg-neutral-800 text-gray-200">
        <div class="mx-auto px-4 w-11/12 sm:w-9/12 md:w-7/12">
            <div class="space-y-4 text-center sm:space-y-0 sm:space-x-6 sm:text-left">
                <a href="mailto:contact@wolmer.me" target="_blank"
                    class="text-center sm:truncate hover:underline">contact@wolmer.me</a>
                    <br>
                    <a href="sitemap.xml" target="_blank"
                            class="text-center text-wolblack sm:truncate hover:underline">sitemap</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeView",
    components: { Lanyard, LinkTab }
}
</script>