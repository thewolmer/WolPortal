import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";



import './assets/main.css'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: "G-WCQB7NRPLF" }})

app.use(router)

app.mount('#app')
