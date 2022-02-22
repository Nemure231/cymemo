<script>
export default {
    data(){
        return {
            isi: '',
            // dataTampil: 0
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
    },
}
</script>

<template>


<div class="flex justify-end w-auto">
    <div class="lg:block md:block block lg:ml-64 md:ml-64 ml-0 w-full">
        <textarea readonly  id="edit-post" v-model="valueIsiGet" class="lg:text-xl md:text-xl text-lg p-6 w-full h-[700px] resize-none focus:outline-none"
        @input="edit(this.$route.params.id)"
        @change="edit(this.$route.params.id)"
        @dblclick="showEdit"
       
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>