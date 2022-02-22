<script>

import Aside from './Aside.vue'
import Nav from '../Base/Nav.vue'
import Create from '../Post/Create.vue'

export default {
    components: {Aside, Nav, Create},
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
            ],
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
            this.$redirect('/');

        },
        edit(value){
            const editJudul = document.getElementById('edit-judul').value;
            const editIsi = document.getElementById('data-post').value;

            this.posts.splice(value, 1, {
                    id: Date.now(),
                    judul: editJudul,
                    isi: editIsi,
                
            });
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
                let text = 'Are you sure to remove all of this memo?'
                if (confirm(text) == true) {
                    localStorage.removeItem("posts");
                    this.posts = [];
                    this.posts.push({
                        id: "",
                        judul: "",
                        isi: "",
                    });
                    this.save();
                }
                this.$redirect('/');
            }
        },
        removeOne(value){
            let text = 'Are you sure to remove this memo?'
            if (confirm(text) == true) {
                this.posts.splice(value, 1)
                this.save();
            }
            this.$redirect('/');

        },
        
    }
}
</script>

<template>
<Nav  v-model="judul" @postMemo="add" @editMemo="edit"/>
<Aside @childRemoveAll="removeAll" @childRemoveOne="removeOne" :posts="posts"/>

<router-view name="Post"></router-view>

<Create v-model="isi" />

<!-- <router-view v-model="isi" name="Create"></router-view> -->

</template>

<style scoped>

</style>