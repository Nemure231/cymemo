<script>
    export default {
        props: {
            posts: {
                type: Array
            },
        },
        emits: ['childRemoveAll', 'childRemoveOne'],
        
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
            removeOne(value){
                this.$emit('childRemoveOne', value);
            },
           
        }
    }
</script>

<template>
    <aside class="relative w-full h-auto z-10">
        <div id="hide-sidebar" class="w-full fixed inset-y-0 overflow-y-auto h-full left-0 bg-cyan-900 lg:w-64 md:w-64">
            <div
                class="sticky flex items-center justify-center flex-row flex-wrap space-x-2 text-2xl font-semibold text-center py-3.5 text-white top-0 backdrop-blur-sm bg-white/25">
                
                <!-- <div @click="goto" class="basis-[15%] w-auto h-9 inline-flex items-center justify-center text-2xl font-bold text-white bg-cyan-800 rounded-full">
                    +
                </div> -->
                <router-link @click="goto" to="/" class="basis-1/3">
                    Cymemo
                </router-link>
                <div @click="removeAll"
                class="cursor-pointer basis-[15%] w-auto h-9  inline-flex items-center justify-center text-xl font-bold text-white bg-red-500 rounded-full">
                     x
            </div>
            </div>
            <div class="flex flex-nowrap first:hidden hover:bg-cyan-800 justify-between items-center text-white font-medium text-lg"
                v-for="(post, index) in posts.slice(1)" :key="index">
                <router-link @click="goto" class="flex-1 py-3 px-6 cursor-pointer hover:bg-cyan-800 truncate"
                    :to="'/post/' + (index + 1) ">{{post.judul}}</router-link>
                <div class="pr-6 flex-none">
                    <button @click="removeOne(index + 1)" class="font-semibold bg-red-500 py-2 px-3 rounded-3xl text-xs">X</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
</style>