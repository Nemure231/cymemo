<script>

export default {
    emits: ['postMemo'],
    methods:{
        add(value){
            this.$emit('postMemo', value);
        }
    }
}
</script>

<template>

<div class="flex justify-end w-auto">
    <div class="lg:block md:block hidden ml-64 w-full">
    <textarea @keyup.enter="add($event.target.value)" class="text-2xl p-6 w-full h-[700px] resize-none focus:outline-none"
    placeholder="Isi ..."></textarea>
    
    </div>
</div>

</template>

<style scoped>

</style>