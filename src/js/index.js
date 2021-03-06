/* objetivo de dar start no vue, associar o vue com a div #app */

import App from './App.vue';
import Home from './Home.vue';
import Sobre from './Sobre.vue';
import User from './User.vue';
import NotFound from './NotFound.vue';
import UserPerfil from './UserPerfil.vue';
import UserPosts from './UserPosts.vue';

const router = new VueRouter({
    routes : [
        { path : '/', component: Home},
        { path : '/sobre', component: Sobre},
        { path : '/user/:id', component: User, children : [
            {path : 'perfil', component : UserPerfil},
            {path : 'posts', component : UserPosts},
        ]},
        { path : '*', component: NotFound},
    ]
});

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});