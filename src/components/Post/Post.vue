<script>
export default {
    data(){
        return {
            isi: '',
            dataTampil: 0
        }
    },
     props: {
         modelValue: {
            type: String,
        },
    },
    methods:{
        tampil(){
            this.dataTampil =! this.dataTampil;
            const hideEdit =  document.getElementById('hide-edit');

            if(hideEdit.classList.contains('hidden')){
                hideEdit.classList.remove('hidden');
            }else{
                hideEdit.classList.add('hidden');
            }
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
    <div class="lg:block md:block block lg:ml-64 md:ml-64 ml-0 w-full">
        <textarea id="data-post" @dblclick="tampil" :readonly="dataTampil == 0 ? true : false" v-model="value" class="text-2xl p-6 w-full h-[700px] resize-none focus:outline-none"
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>