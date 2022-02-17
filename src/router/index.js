import { createRouter, createWebHistory } from 'vue-router'

// import Aside from '../components/Base/Aside.vue'
import Main from '../components/Base/Home.vue'
import Post from '../components/Post/Post.vue'
import Create from '../components/Post/Create.vue'

const routes = [
    {
        path: "/",
        components: {
            Main,
            // Aside
        },
        children: [
            { 
                path: "post",
                components: {
                    Post
                }
            },
            { 
                path: "create",
                components: {
                    Create
                }
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;