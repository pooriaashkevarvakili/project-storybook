import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue"
import "./assets/tailwind.css"
import "./assets/style.css"
import router from "./router/router"
const app=createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
