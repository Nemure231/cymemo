<script>
export default {
    data(){
        return {
            isi: '',
            dataTampil: 0

        }
    },
    methods:{
        tampil(event){
            this.dataTampil =! this.dataTampil;
        }
    },
    mounted(){
        const data = JSON.parse(localStorage.getItem('posts'));
        this.isi = data[this.$route.params.id].isi;
    },
    updated(){
        const data = JSON.parse(localStorage.getItem('posts'));
        this.isi = data[this.$route.params.id].isi;
    },
    computed: {
        value: {
            get() {
                return this.isi;
            },
        },
    },
}
</script>

<template>


<div class="flex justify-end w-auto">
    <div class="lg:block md:block hidden ml-64 w-full">
        <textarea @dblclick="tampil" :readonly="dataTampil == 0 ? false : true" v-model="value" class="text-2xl p-6 w-full h-[700px] resize-none focus:outline-none"
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>