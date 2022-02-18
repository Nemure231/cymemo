<script>
export default {
    props: {
        posts: {
            type: Array
        },
    }
}
</script>

<template>
  <aside class="relative w-full h-auto z-10">
    <div class="fixed inset-y-0 overflow-y-auto h-full left-0 bg-cyan-900 lg:w-64 md:w-64 w-full">
    <div class="sticky space-x-2 text-2xl font-semibold text-center py-4 h-16 text-white top-0 backdrop-blur-sm bg-white/25">
        <router-link to="/">
        Cymemo
        </router-link>
        <router-link class=" text-3xl font-bold text-white bg-cyan-800 px-4 py-2 rounded-full" to="/create">
        +
        </router-link>
    </div>

    <ul class="grid grid-cols-1 divide-y divide-gray-100/20 text-white font-medium text-lg"
    v-for="(post, index) in posts" :key="index">
        <router-link class=" py-3 px-6 cursor-pointer hover:bg-cyan-800 truncate" :to="'/post/' + index ">{{post.isi}}</router-link>
    </ul>
    </div>
  </aside>
</template>

<style scoped>
</style>