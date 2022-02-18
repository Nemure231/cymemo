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
}
</script>

<template>

<div class="flex justify-end w-auto">
    <div class="lg:block md:block hidden ml-64 w-full">
    <textarea v-model="value" class="text-2xl p-6 w-full h-[700px] resize-none focus:outline-none"
    placeholder="Isi ..."></textarea>
    
    </div>
</div>

</template>

<style scoped>

</style>