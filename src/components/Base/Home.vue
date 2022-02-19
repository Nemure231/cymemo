<script>

import Aside from './Aside.vue'
import Nav from '../Base/Nav.vue'

export default {
    components: {Aside, Nav},
    data(){
        return {
            judul: '',
            isi: '',
            posts: [
                {
                    id: '',
                    judul:'',
                    isi: ''
                },
            ]
        }
    },
    mounted(){
        const data = JSON.parse(localStorage.getItem('posts'));
        if(data){
            this.posts = data;
        }
    },
    methods: {
        add(){
            this.posts.push({
                id: Date.now(),
                judul: this.judul,
                isi: this.isi,
            });
            this.judul = ""
            this.isi = ""
            this.save();
            this.$redirect('/')

        },
        save(){
            localStorage.setItem('posts', JSON.stringify(this.posts))
        },
        
    }
}
</script>

<template>
<Nav v-model="judul" @postMemo="add"/>
<Aside :posts="posts"/>

<router-view name="Post"></router-view>

<router-view v-model="isi" name="Create"></router-view>

</template>

<style scoped>

</style>