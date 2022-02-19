<script>
    export default {
        props: {
            posts: {
                type: Array
            },
        },
        // updated() {
        //     this.removeAll()
        // },
        methods: {
            goto() {

                const lebar = document.getElementById('hide-sidebar');
                if(lebar.classList.contains('w-full')){
                    lebar.classList.remove('w-full')
                    lebar.classList.add('w-0')
                }
            },
            removeAll(){
                alert('Are you sure to remove all of the memo?')
                localStorage.removeItem("posts");
            }
           
        }
    }
</script>

<template>
    <aside class="relative w-full h-auto z-10">
        <div id="hide-sidebar" class="w-full fixed inset-y-0 overflow-y-auto h-full left-0 bg-cyan-900 lg:w-64 md:w-64">
            <div
                class="sticky flex items-center justify-center flex-row flex-wrap space-x-2 text-2xl font-semibold text-center py-2 text-white top-0 backdrop-blur-sm bg-white/25">
                <router-link to="/" class="basis-1/3">
                    Cymemo
                </router-link>
                <router-link @click="goto" class="basis-1/5 w-11 h-11 inline-flex items-center justify-center text-3xl font-bold text-white bg-cyan-800 rounded-full" to="/create">
                    +
                </router-link>
                <div @click="removeAll"
                class="cursor-pointer basis-1/5 w-11 inline-flex items-center justify-center h-11 text-2xl font-bold text-white bg-red-500 rounded-full">
                     x
            </div>
            </div>
            

            <div class="flex flex-nowrap first:hidden hover:bg-cyan-800 justify-between items-center text-white font-medium text-lg"
                v-for="(post, index) in posts.slice(1)" :key="index">
                <router-link @click="goto" class="flex-1 py-3 px-6 cursor-pointer hover:bg-cyan-800 truncate"
                    :to="'/post/' + (index + 1) ">{{post.judul}}</router-link>
                <div class="pr-6 flex-none">
                    <button class="bg-red-500 py-1 px-2 rounded-3xl text-xs">{{index+1}}</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>