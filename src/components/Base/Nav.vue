<script>
export default {
    data(){
        return {
            judul: '',
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
        edit(value){
            this.$emit('editMemo', value);
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
        <div v-if="!this.$route.params.id" class="flex lg:justify-between md:justify-between justify-around py-2.5">
            <button @click="kembali" class="lg:hidden md:hidden block lg:px-6 lg:py-2 md:px-6 md:py-2.5 px-2.5 py-2 lg:text-lg md:text-lg text-sm font-semibold rounded-xl text-cyan-900 bg-white">
                Kembali
            </button>
            <input v-model="valueIsiAdd" class="lg:w-1/3 md:w-1/2 w-1/2 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            
            <button @click="add()" class="lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5 lg:text-lg md:text-lg text-sm  font-semibold rounded-xl text-cyan-900 bg-white">
                Simpan
            </button>
        </div>
        <div v-else class="flex lg:justify-between md:justify-between justify-around lg:space-x-0 md:space-x-0 space-x-0 py-2.5">
             <button @click="kembali" class="lg:hidden md:hidden block lg:px-6 lg:py-2 md:px-6 md:py-2.5 px-2.5 py-2 lg:text-lg md:text-lg text-sm font-semibold rounded-xl text-cyan-900 bg-white">
                Kembali
            </button>
            <input id="edit-judul" v-model="valueGetJudul"  class="lg:w-1/3 md:w-1/2 w-3/5 lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5  lg:text-lg md:text-lg text-sm  rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            
            <button @click="edit(this.$route.params.id)" id="edit-button" class="hidden lg:px-6 lg:py-2 md:px-6 md:py-2 px-2.5 py-2.5 lg:text-lg md:text-lg text-sm  font-semibold rounded-xl text-cyan-900 bg-white">
                Edit
            </button>
        </div>
    </div>
  </nav>
</template>