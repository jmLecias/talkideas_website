import './style.css';
import './assets/main.css';
// import './assets/css/swiper-bundle.min.css';
// import './assets/css/animate.css';
// import './css/tailwind.css';
import './assets/css/landing-page.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
