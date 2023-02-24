<template>
    
      <a :href=" item.html_url " v-for="item in repos" :key="item.id" target="_blank" rel="noreferrer noopener">
        <div
          class="rounded-lg cursor-pointer flex flex-col linked-white  p-4 transition-colors justify-between focus-ring text-neutral-500 bg-neutral-800/40 h-full">
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
      created() {
          this.getGithub();
      },
      data() {
          return {
              repos: []
          };
      },
      methods: {
          async getGithub() {
              axios
                 .get("https://api.github.com/users/thewolmer/repos")
                  .then(response => {
                  this.repos = response.data;
                  // console.log(response);
              })
                  .catch((error) => {
                  console.log(error);
              });
          },
      },

  }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>