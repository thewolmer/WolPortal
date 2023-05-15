<template>
        <div class=" rounded-lg bg-default hover:bg-active card-base  overflow-x-hidden transition-colors p-4 cursor-pointer">
           <div class="overflow-x-hidden leading-relaxed space-y-2">
            <h2 class="font-medium text-white truncate">
      {{ title }}
    </h2> <p class="text-white/30 text-md line-clamp-2">
        {{ descrip }}
      </p></div> </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },

  descrip: {
    type: String,
    required: true
  }
})
</script>

<script>
export default{
    name : 'ContentGrid'
}
</script>

