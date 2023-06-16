<script setup>

</script>

<template>
    <section id="projects" >
        <h3  class="text-lg font-poppin font-bold text-neutral-700 px-4  uppercase">
            Web 3 Projects I've worked with</h3>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
     
               
            <a v-for="item in projects" :key="item.name" :href="item.link" target="_blank"
                class="h-full linked-white rounded-md focus-ring overflow-x-hidden transition-colors p-4 cursor-pointer  bg-neutral-800/40 items-center flex space-x-4 justify-between">
                <div class="overflow-x-hidden">
                    <h2 class="font-medium  truncate text-neutral-100 font-poppin">
                        {{ item.name }}
                    </h2>
                    <p class="text-neutral-500  line-clamp-2">
                        {{ item.descrip }}

                    </p>
                    <p class="text-neutral-500 text-sm font-poppin pt-2">
                    
                      {{ item.start }} - {{ item.end }}
                    </p>
                </div>
                <div class="flex-shrink-0"> <img :src="item.logo" class="rounded-xl w-20 shadow-lg shadow-current" loading="lazy" :alt="item.name"> </div>
            </a>
     </div>

    </section>
</template>

<script>
    export default ({
  data() {
    return {
      projects: [
        {
          name: "Moonie Moo",
          descrip: "Keith Chapman’s latest creation “Moonie Moo” as a Genesis Collection of 7,777 NFTs.",
          link: "https://mooniemoo.io?utm_source=wolmer.me",
          logo: "https://cdn.discordapp.com/attachments/933379220258820156/1119321509073264720/GrQs2oFi_400x400.png",
          start: "Sep-2022",
          end: "Present",
        },
        {
          name: "Iacon Labs",
          descrip: "Web3 Alpha community dedicated to exploring the endless possibilities of NFT technology.",
          link: "https://iaconlabs.com?utm_source=wolmer.me",
          logo: "https://cdn.discordapp.com/attachments/933379220258820156/1119319966898991175/kiQumrQ3_400x400.jpg",
          start: "Apr-2023",
          end: "Present",
        },
        {
          name: "Jacks Originals",
          descrip: " An NFT collection created to be a brand inside of the metaverse built on ERC-721 token technology on ethereum blockchain.",
          link: "https://jacksoriginals.me/?utm_source=wolmer.me",
          logo: "https://cdn.discordapp.com/attachments/1060254254591393853/1060348982192242718/jacsorg.png",
          start: "July-2022",
          end: "Aug-2022",
        },
        {
          name: "Seemeo app",
          descrip: "A geo-social business networking application  that connects people and places locally.",
          link: "https://www.seemeo.app/?utm_source=wolmer.me",
          logo: "https://cdn.discordapp.com/attachments/1060254254591393853/1060348982737522748/semo.png",
          start: "Aug-2022",
          end: "Oct-2022",
        },
    ]
    }
  },
})
</script>
