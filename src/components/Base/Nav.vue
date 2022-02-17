<script>
export default {
    props: {
        posts: {
            type: Array
        }
    }
}
</script>
<template>
  <div class="flex justify-end bg-cyan-900 sticky top-0 ">
    <div class="lg:block md:block hidden px-6 h-16 w-full ml-64">
        <div class="flex justify-between py-2.5">
            <input class="px-3 py-2 text-lg rounded-xl focus:outline-none" type="text" placeholder="Judul ...">
            
            <button class="px-6 py-2 text-lg font-semibold rounded-xl text-cyan-900 bg-white">
                Simpan
            </button>
        </div>
    </div>
  </div>
</template>