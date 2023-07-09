<script setup>
import Projects from '../components/Projects.vue'
import TechUsed from '../components/TechUsed.vue'
import ContentGrid from '../components/ContentGrid.vue';
import LinkTab from '../components/LinkTab.vue';
</script>

<template>
  
  <main class="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
    <header class="flex flex-col-reverse justify-between py-10 mx-4 my-16 rounded-md md:flex-row md:items-center">
      <div id="top" class="md:w-8/12">
        <div class="space-y-2">
          <div class="text-xl font-semibold md:text-3xl text-neutral-200">
            <h1>Self taught</h1>
            <h1><a href="https://www.w3schools.com/whatis/whatis_frontenddev.asp?utm_source=wolmer.me" target="_blank"
                rel="noreferrer noopener"
                class="border-b-2 cursor-help font-poppin border-neutral-500 text-neutral-500">Frontend</a>
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
            class="description-link linked-white">React.js</a>,
            
            <a href="https://tailwindcss.com/?utm_source=wolmer.me" target="_blank" rel="noreferrer noopener"
            class="description-link linked-white">Tailwind CSS</a>
            and
            much more.
          </p>
        </div>
        <div class="mt-4 text-neutral-500"> 
        
          <div v-if="status">
    <div v-if="status.listening_to_spotify == true" class="flex items-center gap-2"> 
        <span>
            <i class='text-2xl bx bxl-spotify' style='color:#4eef3c' aria-hidden="true" ></i>
        </span>
        
        <p class="inline">
            Listening to 
            <span class="text-white animate-pulse">{{ status.spotify.song }}</span> by
            <span class="text-white animate-pulse">{{ status.spotify.artist }}</span> 
        </p>
        
    </div>
    <div v-else>
        <div v-if=" status.discord_status == 'online' " class="flex items-center gap-2"> 
            <i class='text-2xl bx bx-radio-circle-marked animate-pulse' style='color:#3ba45c'  ></i>
           
            
            <p class="inline">
                <span class="animate-pulse ">  Online </span> 
                on discord
            </p>
        </div>

        <div v-if=" status.discord_status == 'idle' " class="flex items-center gap-2"> 
            <i class='bx bxs-moon text-md' style='color:#faa61a'  ></i>
            
            <p class="inline">
                <span>  AFK </span> 
                on discord
            </p>
        </div>
        <div v-if="status.discord_status == 'offline' " class="flex items-center gap-2"> 
            <i class='text-2xl bx bx-radio-circle' style='color:#747f8d'  ></i>
            
            <p class="inline">
                <span class="">Offline</span> 
            </p>
        </div>
    </div>


    </div>
    
    <div v-if="loading" class="flex space-x-2 animate-pulse" >
      <div class="inline-flex p-2 ml-1 rounded-full bg-neutral-700 animate-pulse"></div>
        <div class="inline-flex py-2 rounded-full bg-neutral-700 px-14 animate-pulse"></div>
    </div> 
        </div>
    <LinkTab />

      </div>

      
      
      
  
      <div class="mb-4 rounded-full md:mb-0">
        <div id="pfp-bg" class="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-md select-none shadow-green-600">
         
        </div>
      </div>
    </header>
    
    <section id="me" class="my-16">
      <h3 class="px-4 text-lg font-bold uppercase font-poppin text-neutral-700">Me</h3>
      <div class="grid gap-4 mt-4 md:grid-cols-2">
        <RouterLink to="repos">
        <ContentGrid
          descrip="Browse the list of my projects and open source github code here."
          title="Repositories" />
        </RouterLink>
        <router-link to="songs">
        <ContentGrid
          descrip="Music connects people. Check out my recently played songs."
          title="Songs" />
        </router-link>
        <RouterLink to="sponsor">
        <ContentGrid
          descrip="Want to support me and my work, so that i can create more cool stuff?"
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
  <div class="w-full py-4 text-gray-200 bg-neutral-800">
        <div class="w-11/12 px-4 mx-auto sm:w-9/12 md:w-7/12">
            <div class="space-y-4 text-center sm:space-y-0 sm:space-x-6 sm:text-left">
                <a href="mailto:contact@wolmer.me" target="_blank"
                    class="text-center  font-poppin sm:truncate hover:underline">contact@wolmer.me</a>
                    <br>
                    <a href="https://status.wolmer.me" target="_blank"
                            class="text-center  font-poppin sm:truncate hover:underline"><i class='inline text-lg bx bx-station' style='color:#e5e7eb' ></i> Status</a>
            </div>
        </div>
    </div>
</template>

<script>
 import  axios  from 'axios' 
    import { ref } from 'vue';
    let loading = ref(true)


  export default {
    name: "HomeView",
    components: {  LinkTab, Projects, ContentGrid },

             created() {
          this.getStatus();
      },
      data() {
          return {
              status: [],
              activity: [],
              error: []
              
          };
      },
   
      methods: {
         async getStatus() {
             await axios
                 .get("https://api.lanyard.rest/v1/users/932865250930360331")
                  .then(response => {
                    loading.value = false
                  this.status = response.data.data;
                  this.activity = response.data.data.activities[0];
              })
                  .catch((e) => {
                    
                  this.error = e.data
              });
          }
      },
}

</script>