import Vue       from 'vue'
import App       from './App.vue'

import './assets/tailwind.css';
import VueRouter from "vue-router";
import {routes}  from "./route";

import {store} from "./store/store"

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
                                        routes,
                                        mode: "history"
                                    })

new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
