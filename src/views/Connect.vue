<script setup>
import Header from '../components/Header.vue';
import ContentGrid from '../components/ContentGrid.vue';
import Opensea from '../components/icons/Custom/Opensea.vue';
import ClubhouseLogo from '../components/icons/Custom/ClubhouseLogo.vue';
import Footer from '../components/Footer.vue'
</script>



<template>
    <div class="text-neutral-600 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">

        <Header title="Connect" descrip="If you have any questions, feel free to contact me." />
        <div  class="mt-4 grid gap-2 md:gap-4 md:grid-cols-2">

        <a href="https://twitter.com/intent/user?screen_name=thewolmer" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on Twitter"
          title="Twitter">
             <i class='bx bxl-twitter text-4xl' style='color:#737373' ></i> 
        </ContentGrid>
        </a>

        <a href="https://github.com/thewolmer/" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on GitHub"
          title="GitHub">
            <template #icon> <i class='bx bxl-github text-4xl' style='color:#737373' ></i> </template>
        </ContentGrid>
        </a>

        <a href="https://www.linkedin.com/in/thewolmer/" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Connect with me on LinkedIn"
          title="LinkedIn">
            <template #icon> <i class='bx bxl-linkedin-square text-4xl' undefined ></i> </template>
        </ContentGrid>
        </a>

        <a href="https://instagram.com/thewolmer" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on Instagram"
          title="Instagram">
            <template #icon> <i class='bx bxl-instagram-alt text-4xl' style='color:#737373' ></i> </template>
        </ContentGrid>
         </a>

        <a href="https://opensea.io/thewolmer" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="View OpenSea Profile"
          title="OpenSea">
            <template #icon> <Opensea /> </template>
        </ContentGrid>
        </a>

        <a href="https://open.spotify.com/user/31fph23qi2hh55jwun56gn4hf2oe?si=AmyAYdjqQWmGu-XKhmeL3g" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on Spotify"
          title="Spotify">
            <template #icon> <i class='bx bxl-spotify text-4xl'></i> </template>
        </ContentGrid>
        </a>

        <a href="https://snapchat.com/add/thewolmer" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Send Request on Snapchat"
          title="Snapchat">
            <template #icon> <i class='bx bxl-snapchat text-4xl' style='color:#737373' ></i> </template>
        </ContentGrid>
        </a>
        <a href="https://www.clubhouse.com/thewolmer" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on Clubhouse"
          title="Clubhouse">
            <template #icon> <ClubhouseLogo /> </template>
        </ContentGrid>
        </a>

        <!-- <a href="https://in.pinterest.com/thewolmer&utm_source=wolmer.me" target="_blank" rel="noopener noreferrer">
        <ContentGrid
          descrip="Follow me on Pinterest"
          title="Pinterest">
            <template #icon> <i class='bx bxl-pinterest text-4xl'></i> </template>
        </ContentGrid>
        </a> -->

        </div>
    </div>
    <Footer />
</template>

<script>
  export default {
    name: 'Connect'
}
</script>

<style lang="scss" scoped>

</style>
