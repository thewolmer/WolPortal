<script setup>
import ReposFallback from '../components/Loaders/ReposFallback.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue'
import { defineAsyncComponent } from 'vue';
  const AsyncRepos = defineAsyncComponent(() => import('../pages/Repos.vue'))
</script>
<template>
  <main class="space-y-14 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Repositories" descrip="My public posts on github" />
      <div class="grid gap-4 md:grid-cols-2">
       
    <Suspense>
      <template #default>
      <AsyncRepos />
    </template>
    <template #fallback>
      <ReposFallback />
    </template>
  </Suspense>

  </div>
  </main>
  <Footer />
</template>

  <script>
  export default {
    name: "RepoView",
  }
  </script>

<style lang="scss" scoped>

</style>