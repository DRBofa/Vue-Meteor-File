import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../ui/Home'
import Content from '../ui/Content'

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/content',
            component: Content
        },
      
        // { path: '/index', component: Indexs }
    ]
})