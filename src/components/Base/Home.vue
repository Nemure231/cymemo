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
        removeAll() {
            if(this.posts.length <= 1){
                alert("You don't have any memo to delete!")
            }else{
                alert('Are you sure to remove all of this memo?')
                localStorage.removeItem("posts");
                this.posts = [];
                this.posts.push({
                    id: "",
                    judul: "",
                    isi: "",
                });
                this.save();
                this.$redirect('/');
            }
        },
        removeOne(value){
            alert('Are you sure to remove this memo?')
            const mk = this.posts.splice(value, 1)
            this.save();
        }
        
    }
}
</script>

<template>
<Nav v-model="judul" @postMemo="add"/>
<Aside @childRemoveAll="removeAll" @childRemoveOne="removeOne" :posts="posts"/>

<router-view name="Post"></router-view>

<router-view v-model="isi" name="Create"></router-view>

</template>

<style scoped>

</style>