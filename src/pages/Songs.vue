
<template>
      <a :href="item.external_urls.spotify" v-for="item in songs" :key="item.id" target="_blank" rel="noreferrer noopener">
        <div
          class="rounded-lg cursor-pointer flex linked-white p-4 transition-colors justify-between focus-ring text-neutral-500 bg-neutral-800/40 h-full">
          <div class="space-y-2">
            <div class="flex justify-between">
              <h3 class="text-wolwhite text-md items-center display-inline"> {{ item.name }}
              </h3>
            </div>
            <p class=" text-neutral-500 ml-2">
             by  {{ item.artists[0].name }}
            </p>
          </div>
          
            <div class=" items-center inline-block mt-2">
              <img :src="item.album.images[2].url" :alt="item.name" loading="lazy" class="rounded-md shadow- 4xl opacity-70 w-64px">
          </div>
      
        </div>
      </a>

      <div v-if="error.message" class=" text-red-500 flex flex-col items-center justify-center">
        <p class="text-center my-4">
          <i class='bx bxs-error-circle text-4xl'></i>
          <br>
          Something went wrong, Try refreshing the Page
           <br>
          <span class="text-sm">
          {{  error.code }}
        </span>
      </p>
      <a href="https://status.wolmer.me/" target="_blank">
      <button class="bg-[#1d1d1d] text-wolgray px-2 py-1 rounded-md shadow-lg hover:bg-[#202020] hover:border border-red-500"> Status Page <i class='bx bx-link-external' style='color:#737373'  ></i></button>
    </a>
      </div>
    
  </template>

<script>
  import { reactive } from 'vue'
  import  axios  from 'axios'
  
    const headers = {
  'Content-Type': 'application/json'
    };
  const url = 'https://v1.nocodeapi.com/thewolmer/spotify/SGgluSqguRNJUeAs/usersTop?type=tracks&time_range=short_term&perPage=20';
  export default {
      name: "reposData",
      created() {
          this.getSongs();
      },
      data() {
          return {
              songs: [],
              error: [ ]
          };
      },
      methods: {


          getSongs() {
              axios.get(url, { headers })
             .then(response => {
                  this.songs = response.data.items;
                   console.log(this.songs);})
            .catch((error) => {
                  // console.log(error);
                  this.error = error;
              });
          }
      },

  }
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>