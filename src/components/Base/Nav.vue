<script>
export default {
    data(){
        return {
            judul: '',
            dropdown: false
        }
    },
    // mounted(){
    //     this.judul = JSON.parse(localStorage.getItem('posts'))[this.$route.params.id].judul
    // },
    // updated(){
    //     this.judul = JSON.parse(localStorage.getItem('posts'))[this.$route.params.id].judul;
    // },
    emits: ['postMemo', 'editMemo', 'childRemoveOne'],
    props: ['modelValue'],
    methods:{
        add(){
            this.$emit('postMemo');
            document.getElementById('hide-sidebar').classList.remove('w-0')
            document.getElementById('hide-sidebar').classList.add('w-full')
        
        },
        kembali(){
            document.getElementById('hide-sidebar').classList.remove('w-0')
            document.getElementById('hide-sidebar').classList.add('w-full')

            this.$redirect('/')
        },
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
        openDropdown(){
            this.dropdown =! this.dropdown

        },
        removeOne(value){
                this.$emit('childRemoveOne', value);
        },
    },
    computed: {
        valueIsiAdd: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
        valueGetJudul: {
            get() {
                const data = JSON.parse(localStorage.getItem('posts'));
                return this.judul = data[this.$route.params.id].judul;
            },
            set(){
            

            }
        },
    },
}
</script>
<template>
  <nav class="flex justify-end bg-cyan-900 sticky top-0 ">
    <div class="lg:block md:block block px-6 h-16 w-full lg:ml-64 md:ml-64 ml-0">
        <div v-if="!this.$route.params.id" class="flex items-center lg:justify-between md:justify-between justify-around py-2.5">
            <div @click="add(); kembali();" class="hover:bg-cyan-800 h-11 w-11 inline-flex justify-center items-center rounded-full text-white cursor-pointer lg:hidden md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </div>
            <input v-model="valueIsiAdd" class="lg:w-1/3 md:w-1/2 w-1/2 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            <div @click="add()" class="hover:bg-cyan-800 h-11 w-11 inline-flex justify-center items-center rounded-full text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                </svg>
            </div>

        </div>
        <div v-else class="flex items-center lg:justify-between md:justify-between justify-between lg:space-x-0 md:space-x-0 space-x-0 py-2.5">
            <div class="text-white cursor-pointer lg:hidden md:hidden block" @click="kembali">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </div>
            <input id="edit-judul" readonly v-model="valueGetJudul"  class="lg:w-1/3 md:w-1/2 w-3/5 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ..."
            @input="edit(this.$route.params.id)"
            @change="edit(this.$route.params.id)"
            
            >
            
            <div class="text-white cursor-pointer relative" @click="openDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                <div v-show="dropdown" class="absolute -bottom-20 right-0">
                    <div class="font-semibold bg-cyan-900 rounded-xl border border-black/25 w-40 h-auto">
                        <div @click="showEdit" class="flex flex-row flex-nowrap justify-between items-center cursor-pointer border-b rounded-t-xl border-white/25 px-2 py-1 hover:bg-cyan-800">
                            <div>Edit</div>
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </div>
                        </div>
                        <div @click="removeOne(this.$route.params.id)" class="flex flex-row flex-nowrap justify-between items-center cursor-pointer px-2 py-1 rounded-b-xl hover:bg-cyan-800">
                            <div>
                                Delete
                            </div>
                            <div class="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </nav>
</template>