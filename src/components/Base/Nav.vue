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
    emits: ['postMemo', 'editMemo'],
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
            const edit =  document.getElementById('edit-post');
            
            if(edit.readOnly == true){
                edit.readOnly = false
                edit.focus();
                
            }else{
                edit.readOnly = true
            }

        },
        edit(value){
            this.$emit('editMemo', value);
        },
        openDropdown(){
            this.dropdown =! this.dropdown

        }
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
        <div v-if="!this.$route.params.id" class="flex lg:justify-between md:justify-between justify-around py-2.5">
            <button @click="kembali" class="lg:hidden md:hidden block lg:px-6 lg:py-2 md:px-6 md:py-2.5 px-2.5 py-2 lg:text-lg md:text-lg text-sm font-semibold rounded-xl text-cyan-900 bg-white">
                Kembali
            </button>
            <input v-model="valueIsiAdd" class="lg:w-1/3 md:w-1/2 w-1/2 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            
            <button @click="add()" class="lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5 lg:text-lg md:text-lg text-sm  font-semibold rounded-xl text-cyan-900 bg-white">
                Simpan
            </button>
        </div>
        <div v-else class="flex items-center lg:justify-between md:justify-between justify-between lg:space-x-0 md:space-x-0 space-x-0 py-2.5">
            <div class="text-white cursor-pointer lg:hidden md:hidden block" @click="kembali">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            </div>
            <input id="edit-judul" v-model="valueGetJudul"  class="lg:w-1/3 md:w-1/2 w-3/5 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ..."
            @input="edit(this.$route.params.id)"
            @change="edit(this.$route.params.id)"
            @focus="edit(this.$route.params.id)"
            @blur="edit(this.$route.params.id)"
            
            >
            
            <div class="text-white cursor-pointer relative" @click="openDropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                <div v-show="dropdown" class="absolute -bottom-20 right-0">
                    <div class="font-semibold bg-cyan-900 rounded-xl border border-black/25 w-40 h-auto">
                        <div @click="showEdit" class="cursor-pointer border-b rounded-t-xl border-white/25 px-2 py-1 hover:bg-cyan-800">
                            Edit
                        </div>
                        <div class="px-2 py-1 rounded-b-xl hover:bg-cyan-800">
                            Delete
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </nav>
</template>