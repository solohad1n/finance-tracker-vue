import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { auth } from './firebase/config'
import { onAuthStateChanged } from "firebase/auth";

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    createApp(App).use(store).use(router).mount('#app')
  }
})


