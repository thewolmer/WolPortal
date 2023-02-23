<template>
    
      <a :href=" item.html_url " v-for="item in repos" :key="item.id" target="_blank" rel="noreferrer noopener">
        <div
          class="h-full linked-white rounded-md focus-ring overflow-x-hidden transition-colors p-4 cursor-pointer  bg-neutral-800/40 items-center flex space-x-4 justify-between">
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
   
  </template>







<script>
  import { reactive } from 'vue'
  import  axios  from 'axios'

  
  export default {
      name: "reposData",
      mounted() {
          this.getGithub();
      },
      data() {
          return {
              repos: []
          };
      },

      methods: {
          getGithub() {
              axios
                 .get("https://api.github.com/users/thewolmer/repos")
                  .then(response => {
                  this.repos = response.data;
                  console.log(response);
              })
                  .catch((error) => {
                  console.log(error);
              });
          }
      },

  }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>