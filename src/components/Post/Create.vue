<script>

export default {
    props: ['modelValue'],
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
}
</script>

<template>

<div class="flex justify-end w-auto">
    <div class="lg:block md:block block sticky top-20 lg:ml-64 md:ml-64 ml-0 w-full">
    <textarea 
        v-model="value"
        class=" lg:text-xl md:text-xl text-lg px-6 lg:pt-6 md:pt-6 pt-6 w-full h-[500px] resize-none focus:outline-none"
    placeholder="Description ..."></textarea>    
    </div>
</div>

</template>

<style scoped>

</style>