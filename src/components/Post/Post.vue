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


<div class="flex flex-col justify-end w-auto overflow-hidden">
    <div class="lg:ml-64 md:ml-64 ml-0 w-full overflow-hidden">
        <div class="w-full">
            <div id="hide-date" class="sticky lg:-z-0 md:-z-0 sm:-z-0 rounded-3xl bg-cyan-900 inset-x-0 w-max -mb-12 mt-3 lg:left-[40%] md:left-[33%] left-[44%] p-2 text-white drop-shadow-xl font-medium lg:text-sm md:text-sm text-xs">
                {{valueDateGet}}
            </div>
        </div>
      
        <textarea readonly  placeholder="Description ..."
        id="edit-post" v-model="valueIsiGet" class="lg:text-xl md:text-xl text-lg px-6 pt-12 w-full h-[550px] resize-none focus:outline-none"
        @input="edit(this.$route.params.id)"
        @change="edit(this.$route.params.id)"
        @dblclick="showEdit"
       
        ></textarea>
    </div>
</div>
</template>

<style scoped>

</style>