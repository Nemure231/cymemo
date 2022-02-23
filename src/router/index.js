import { createRouter, createWebHistory } from 'vue-router'

// import Aside from '../components/Base/Aside.vue'
import Main from '../components/Base/Home.vue'
import Post from '../components/Post/Post.vue'
import Create from '../components/Post/Create.vue'
import ReloadPWA from "../components/ReloadPWA.vue";

const routes = [
    {
        path: "/",
        components: {
            Main,
            ReloadPWA
        },
        children: [
            { 
                path: "post/:id",
                components: {
                    Post
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