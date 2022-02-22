<script>
export default {
    data(){
        return {
            isi: '',
            dataTampil: 0
        }
    },
    methods:{
        tampil(){
            this.dataTampil =! this.dataTampil
            const hideEditButton =  document.getElementById('edit-button');
            if(hideEditButton.classList.contains('hidden')){
                hideEditButton.classList.remove('hidden');
            }else{
                hideEditButton.classList.add('hidden');
            }
        }
    },
   
    computed: {
        valueIsiGet: {
            get() {
                const data = JSON.parse(localStorage.getItem('posts'));
                return this.isi = data[this.$route.params.id].isi;
            },
        },
    },
}
</script>

<template>


<div class="flex justify-end w-auto">
    <div class="lg:block md:block block lg:ml-64 md:ml-64 ml-0 w-full">
        <textarea id="data-post" @dblclick="tampil" :readonly="dataTampil == 0 ? true : false" v-model="valueIsiGet" class="text-2xl p-6 w-full h-[700px] resize-none focus:outline-none"
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>