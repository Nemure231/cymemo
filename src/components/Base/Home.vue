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
        formatDate(date, format){
            const map = {
                mm: date.getMonth() + 1,
                dd: date.getDate(),
                yy: date.getFullYear().toString().slice(-2),
                yyyy: date.getFullYear()
            }
            return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])

        },
        add(){
            const today = new Date();
            
            this.posts.push({
                id: this.formatDate(today, 'dd/mm/yy'),
                judul: this.judul == '' ? 'Untitled' : this.judul,
                isi: this.isi,
            });
            this.judul = ""
            this.isi = ""
            this.save();
            this.$redirect('/');

        },
        edit(value){
            const editJudul = document.getElementById('edit-judul').value;
            const editIsi = document.getElementById('edit-post').value;

            this.posts.splice(value, 1, {
                    id: Date.now(),
                    judul: editJudul == '' ? 'Untitled' : editJudul,
                    isi: editIsi,
                
            });
            this.save();
            document.getElementById('hide-sidebar').classList.remove('w-0')
            document.getElementById('hide-sidebar').classList.add('w-full')
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

<Create :class="this.$route.params.id ? 'hidden' : 'block'" v-model="isi" />


</template>

<style scoped>

</style>