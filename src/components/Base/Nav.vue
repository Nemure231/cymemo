<script>
export default {
    props: ["modelValue"],
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
    emits: ['postMemo'],
    methods:{
        add(){
            this.$emit('postMemo');
        },
        onTekan(){
            document.getElementById('hide-sidebar').classList.remove('w-0')
            document.getElementById('hide-sidebar').classList.add('w-full')
            this.$redirect('/')
        },
    },
}
</script>
<template>
  <nav class="flex justify-end bg-cyan-900 sticky top-0 ">
    <div class="lg:block md:block block px-6 h-16 w-full lg:ml-64 md:ml-64 ml-0">
        <div v-if="this.$route.path == '/create'" class="flex justify-between py-2.5">
            <input v-model="value" class="px-3 py-2 text-lg rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            
            <button @click="add()" class="px-6 py-2 text-lg font-semibold rounded-xl text-cyan-900 bg-white">
                Simpan
            </button>
        </div>
        <div v-else class="flex justify-start py-2.5">
            <button @click="onTekan()" class="lg:hidden md:hidden block px-6 py-2 text-lg font-semibold rounded-xl text-cyan-900 bg-white">
                Kembali
            </button>
        </div>
    </div>
  </nav>
</template>