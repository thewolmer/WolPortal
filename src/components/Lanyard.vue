<template>
    <div v-if="status.listening_to_spotify == true" class="flex items-center gap-2"> 
        <span>
            <i class='bx bxl-spotify text-2xl' style='color:#4eef3c' aria-hidden="true" ></i>
        </span>
        
        <p class="inline">
            Listening to 
            <span class="text-white animate-pulse">{{ status.spotify.song }}</span> by
            <span class="text-white animate-pulse">{{ status.spotify.artist }}</span> 
        </p>
        
    </div>
    <div v-else>
        <div v-if=" status.discord_status == 'online' " class="flex items-center gap-2"> 
            <i class='bx bx-radio-circle-marked animate-pulse  text-2xl' style='color:#3ba45c'  ></i>
           
            
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
            <i class='bx bx-radio-circle text-2xl' style='color:#747f8d'  ></i>
            
            <p class="inline">
                <span class="">Offline</span> 
            </p>
        </div>
    </div>


    
    

</template>

<script>
 
  import  axios  from 'axios'
  
  
  export default {
      name: "Lanyard",
      
      mounted() {
          this.getStatus();
      },
      data() {
          return {
              status: [],
              activity: [],
              
          };
      },
   
      methods: {
          getStatus() {
              axios
                 .get("https://api.lanyard.rest/v1/users/932865250930360331")
                  .then(response => {
                  this.status = response.data.data;
                  this.activity = response.data.data.activities[0];
                //   console.log(response.data.activities);
                //   console.log(response);
                //   console.warn(this.activity.assets.large_text);
              })
                  .catch((error) => {
                  console.log(error);
              });
          }
      },

  }
  
  </script>

<style lang="sass" scoped>

</style>
