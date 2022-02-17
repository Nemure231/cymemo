<script>

import Aside from './Aside.vue'
import Nav from './Nav.vue'

export default {
    components: {Aside, Nav},
    data(){
        return {
            posts: [
                {
                    id: '',
                    judul:'' ,
                    isi: ''
                },
            ]
        }
    },
    methods: {
        add(isi){
            this.posts.push({
                id: 2,
                judul: '',
                isi: isi,
            });
        }
    }
}
</script>

<template>

<Aside :posts="posts"/>

<Nav :posts="posts" />
<router-view name="Post"></router-view>
<router-view  @postMemo="add" name="Create"></router-view>

</template>

<style scoped>

</style>