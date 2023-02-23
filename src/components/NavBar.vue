<template>
    <nav class="w-full pt-4">
        <div class="container mx-auto px-4 w-11/12 relative sm:w-9/12 md:w-7/12">
            <div class="flex items-center justify-between">
                <RouterLink to="/"
                    class="flex-shrink-0 h-10 w-10" aria-current="page">
                    <img src="../assets/cd/wollogovec.png" draggable="false" class="hover:animate-spin-slow rounded-md ring-black transition-transform ring-2 ring-opacity-5 sm:transform" alt="icon">
                </RouterLink>
                </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="scss" scoped>

</style>