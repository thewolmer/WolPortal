<template>
        <div
          class="rounded-md linked-white focus-ring overflow-x-hidden transition-colors p-4 cursor-pointer bg-neutral-800/40 mt-4  gap-4 md:grid-cols-2 items-center flex space-x-4 justify-between">
          <div class="overflow-x-hidden ">
            <h2 class="font-medium text-neutral-100">
              {{ title }}
            </h2>
            <p class="text-neutral-500 line-clamp-2">
              {{ descrip }}
            </p>
        </div> <!---->
            <div class="flex-shrink-0 text-wolgray"> <slot name="icon"> </slot> </div>
        </div>
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

