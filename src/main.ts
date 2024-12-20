import {createApp, h} from 'vue'
import './style.css'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import {createPinia} from "pinia";
import router from "./router";

const pinia = createPinia()

// createApp(App).mount('#app')

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App/*, {
                props: {
                    // single-spa props are available on the "this" object. Forward them to your component as needed.
                    // https://single-spa.js.org/docs/building-applications#lifecyle-props
                    name: this.name,
                    mountParcel: this.mountParcel,
                    singleSpa: this.singleSpa,
                },
            }*/);
        },
    },
    handleInstance: (app) => {
        app.use(pinia)
        app.use(router)
    },
    replaceMode: true,
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
