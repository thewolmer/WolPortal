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

<template>
    <header class="space-y-2 my-12 px-4 ">
        <h1 class="text-4xl text-neutral-300">{{ title }}</h1>
        <p class="text-neutral-500"> {{ descrip }} </p>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>





