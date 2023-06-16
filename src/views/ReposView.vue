<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'

</script>
<template>
  <main class="space-y-14 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Repositories" descrip="My public posts on github" />
      <div v-if="repos" class="grid gap-4 md:grid-cols-2">
    <a :href=" item.html_url " v-for="item in repos" :key="item.id" target="_blank" rel="noreferrer noopener">
        <div
          class="rounded-lg cursor-pointer flex flex-col linked-white  p-4 transition-colors justify-between focus-ring text-neutral-500 bg-default hover:bg-active h-full">
          <div class="space-y-2">
            <div class="flex justify-between space-x-2">
              <h3 class="text-gray-700 items-center truncate dark:text-neutral-400"><span
                  class="text-neutral-700">thewolmer/</span>{{ item.name }}
              </h3>
            </div>
            <p class="line-clamp-2 text-neutral-500">
              {{ item.description }}
            </p>
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <span>Language:</span> 
              <span v-if=" item.language != null"> {{ item.language }} </span>
              <span v-else> N/A  </span> </div>
            <div class="flex items-center justify-between"><span>License:</span> <span v-if="item.license != null"> {{ item.license.spdx_id }} </span>
             <span v-else> - </span>
          </div>
        </div>
        </div>
      </a>
        </div>

      <div v-if="error.message" class=" text-red-500 flex flex-col items-center justify-center">
        <p class="text-center my-4">
          <i class='bx bxs-error-circle text-4xl'></i>
          <br>
          <span>
          {{  error.message }}
        </span>
      </p>
      <a href="https://status.wolmer.me/" target="_blank">
      <button class="bg-[#1d1d1d] text-wolgray px-2 py-1 rounded-md shadow-lg hover:bg-[#202020] hover:border border-blue-700"> Status Page <i class='bx bx-link-external' style='color:#737373'  ></i></button>
    </a>
      </div>
      <div v-if="loading" class="grid gap-4 md:grid-cols-2 ">
        <div>
        <div
          class="rounded-lg  flex flex-col p-4 transition-colors justify-between bg-default h-full animate-pulse">
          <div class="space-y-5 animate-pulse">
            <div class="flex justify-between space-x-2">
              <h3 class=" p-3 px-32 rounded-full bg-neutral-700 items-center truncate animate-pulse">
              </h3>
            </div>
            <div class="space-y-1">
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            </div>
          </div>
          <div class="mt-4 space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-12 bg-neutral-800 py-2 rounded-full"></span> 
              </div>
            <div class="flex items-center justify-between">
              <span class="px-12 bg-neutral-800 py-2 rounded-full"></span> 
          </div>
        </div>
        
        </div>
      </div>
        <div>
        <div
          class="rounded-lg  flex flex-col p-4 transition-colors justify-between bg-default h-full animate-pulse">
          <div class="space-y-5 animate-pulse">
            <div class="flex justify-between space-x-2">
              <h3 class=" p-3 px-32 rounded-full bg-neutral-700 items-center truncate animate-pulse">
              </h3>
            </div>
            <div class="space-y-1">
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            <p class="bg-neutral-800  py-1 rounded-full animate-pulse">
            </p>
            </div>
          </div>
          <div class="mt-4 space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-12 bg-neutral-800 py-2 rounded-full"></span> 
              </div>
            <div class="flex items-center justify-between">
              <span class="px-12 bg-neutral-800 py-2 rounded-full"></span> 
          </div>
        </div>
        
        </div>
      </div>
      </div>

  </main>
  <Footer />
</template>

  <script>
  import { reactive, ref } from 'vue'
  import  axios  from 'axios'
  let loading = ref(true)

  
  export default {
      name: "reposData",
      created() {
       this.getGithubWithDelay();
      },
      data() {
          return {
              repos: [],
              error: []
           
          };
      },
      methods: {
          getGithub() {
              axios
                 .get("https://api.github.com/users/thewolmer/repos")
                  .then(response => {
                  this.repos = response.data;
                   loading.value = false 
                  // console.log(response);
              })
                  .catch((error) => {
                    loading.value = false
                  // console.log(error);
                  this.error = error;
              });
          },
          getGithubWithDelay() {
      setTimeout(() => {
        this.getGithub();
      }, 2000);
      },

  }
  }


  
  </script>

<style lang="scss" scoped>

</style>