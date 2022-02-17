//Mixins adalah fungsi javascript terpisah dengan extensioan js
// Yang dapat terhubung secara langsung dengan file vue

const mixpost = {
  methods: {
    data(){
        return {
            post: "",
            posts: ['mmmm', 'mmmm']
        }
    },
    add(){
        // this.posts.push(this.post);
        // this.save();
    },
    save(){
        // localStorage.setItem('posts', JSON.stringify(this.posts))
        // alert('mmm')
    }
}
}
    
export default mixpost;