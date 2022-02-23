<script>
    export default {
        props: {
            posts: {
                type: Array
            },
        },
        emits: ['childRemoveAll'],
        
        methods: {
            goto() {
                const lebar = document.getElementById('hide-sidebar');
                if(lebar.classList.contains('w-full')){
                    lebar.classList.remove('w-full')
                    lebar.classList.add('w-0')
                }
            },
            removeAll(){
                this.$emit('childRemoveAll');
            },
            // removeOne(value){
            //     this.$emit('childRemoveOne', value);
            // },
           
        }
    }
</script>

<template>
    <aside class="relative w-full h-auto z-10">
        <div id="hide-sidebar" class="w-full fixed inset-y-0 overflow-y-auto h-full left-0 bg-cyan-900 lg:w-64 md:w-64">
            <div
                class="sticky flex items-center justify-center flex-row flex-wrap space-x-6 text-2xl font-semibold text-center py-3.5 text-white top-0 backdrop-blur-sm bg-white/25">
                
                <div @click="goto" :class="posts.length == 1 ? 'order-1' : 'order-0'" 
                    class="lg:hidden md:hidden cursor-pointer w-11 h-11  inline-flex items-center justify-center flex-none text-2xl font-bold text-white bg-cyan-800 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                        <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                    </svg>
                </div>
                <router-link @click="goto" to="/" class="relative basis-1/3">
                    <div class="absolute -top-3 lg:-right-3 md:-right-3 sm:right-11 right-3 font-semibold text-sm">
                        1.0.0
                    </div>
                    Cymemo
                </router-link>
                <div @click="removeAll" :class="posts.length == 1 ? 'hidden' : 'block'"
                    class="cursor-pointer  w-11 h-11 inline-flex items-center justify-center text-xl font-bold text-white bg-red-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
            </div>
            <div class="last:mb-11 flex flex-nowrap  first:hidden hover:bg-cyan-800 justify-between items-center"
                v-for="(post, index) in posts.slice(1)" :key="index">
                <router-link @click="goto" class="border-b border-white/25 flex-1 py-3 px-6 cursor-pointer hover:bg-cyan-800 truncate text-white font-medium text-lg"
                    :to="'/post/' + (index + 1) ">{{post.judul}}</router-link>
                <div class="pr-6 py-4 text-gray-300 flex-none text-sm border-b border-white/25">
                    <!-- <button  class="font-semibold bg-red-500 py-2 px-3 rounded-3xl text-xs">X</button>
                    -->
                    {{post.id}}
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 bg-cyan-900 lg:w-60 md:w-60 w-full">
            <div class="p-2  flex justify-between items-center">
                <div class="text-white font-medium lg:text-base md:text-base sm:text-sm text-xs">
                    Made by Karol.Y
                </div>
                <a href="https://github.com/Nemure231/cymemo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="fill-white" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>

            </div>

        </div>
    </aside>
</template>

<style scoped>
</style>