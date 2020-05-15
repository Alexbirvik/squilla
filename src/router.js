import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Edit from './views/Edit.vue'


Vue.use(Router) 

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add',
            name: 'add',
            component: Add
        },
        {
            path: '/:index/edit',
            name: 'edit',
            component: Edit
        }
        
    ]
})

