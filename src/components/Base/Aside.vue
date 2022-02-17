<script>
export default {
    props: {
        posts: {
            type: Array
        }
    }
}
</script>

<template>
  <aside class="relative w-full h-auto z-10">
    <div class="fixed inset-y-0 overflow-y-auto h-full left-0 bg-cyan-900 lg:w-64 md:w-64 w-full">
    <div class="sticky text-2xl font-semibold text-center py-4 h-16 text-white top-0 backdrop-blur-sm bg-white/25">
        Cymemo
    </div>

    <ul class=" grid grid-cols-1 divide-y divide-gray-100/20 text-white font-medium text-lg"
    v-for="post in posts" :key="post">
        <router-link class="py-3 px-6 cursor-pointer hover:bg-cyan-800 truncate" to="/post">{{post.judul}}</router-link>
    </ul>
    </div>
  </aside>

  <!-- <router-link to="/list">List</router-link> -->
</template>

<style scoped>
</style>