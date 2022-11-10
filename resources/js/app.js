import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from './router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';


createApp({
    components: {
        Login,
        Dashboard
    }
}).use(router).mount('#app');