import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Base/Home.vue'
import Post from '../components/Post/Post.vue'

const routes = [
    {
        path: "/",
        components: {
            Main,
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