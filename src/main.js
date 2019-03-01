import Vue from 'vue';
import VueRouter from 'vue-router';
// TODO: 2 - Import and add VueRouter to the Vue application

import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
