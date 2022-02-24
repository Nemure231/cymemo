import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Base/Home.vue'
import Post from '../components/Post/Post.vue'
// import ReloadPWA from "../components/ReloadPWA.vue";

const routes = [
    {
        path: "/",
        components: {
            Main,
            // ReloadPWA
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