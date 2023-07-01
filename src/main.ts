import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import "./global.scss"
import router from "./router/router";

const pinia = createPinia()
const app = createApp(App);

app
    .use(pinia)
    .use(router)
    .mount("#app")
