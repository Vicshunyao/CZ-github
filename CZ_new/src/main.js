import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3";
import '@/util/axios.config'
const items = []; // 假设这是从后端请求的数据

createApp(App)
    .use(Particles)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .mount('#app')
