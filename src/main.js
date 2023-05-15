import { createApp } from 'vue'
import 'dotenv'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
// import './assets/main.css'
// import '../node_modules/nprogress/nprogress.css'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: "G-WCQB7NRPLF" }})

app.use(router)

app.mount('#app')
