import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './firebase'

const app = createApp(App)
app.use(router).mount('#app')
