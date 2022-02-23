<script>
export default {
    data(){
        return {
            isi: '',
            date: ''
        }
    },
    emits: ['editMemo'],
    methods:{
        showEdit(){
             const editPost =  document.getElementById('edit-post');
             const editJudul =  document.getElementById('edit-judul');
            
            if(editPost.readOnly == true && editJudul.readOnly == true){
                editPost.readOnly = false
                editJudul.readOnly = false
                editPost.focus();
                
            }else{
                editPost.readOnly = true
                editJudul.readOnly = true
            }
        },
        edit(value){
            this.$emit('editMemo', value);
        },
    
    },
   
    computed: {
        valueIsiGet: {
            get() {
                const data = JSON.parse(localStorage.getItem('posts'));
                return this.isi = data[this.$route.params.id].isi;
            },
        },
        valueDateGet: {
            get() {
                const data = JSON.parse(localStorage.getItem('posts'));
                return this.date = data[this.$route.params.id].id;
            },
        },

    },
}
</script>

<template>


<div class="flex flex-col justify-end w-auto">
    <div class="lg:ml-64 md:ml-64 ml-0 w-full relative">
        <div class="absolute top-3 lg:right-72 md:right-72 right-6 text-gray-400 font-medium lg:text-lg md:text-lg text-md">
            {{valueDateGet}}
        </div>
        <textarea readonly  placeholder="Description ..."
        id="edit-post" v-model="valueIsiGet" class="lg:text-xl md:text-xl text-lg px-6 lg:pt-6 md:pt-6 pt-12 w-full h-[550px] resize-none focus:outline-none"
        @input="edit(this.$route.params.id)"
        @change="edit(this.$route.params.id)"
        @dblclick="showEdit"
       
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>