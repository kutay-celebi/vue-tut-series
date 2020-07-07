import Vue       from 'vue'
import App       from './App.vue'

import './assets/tailwind.css';
import VueRouter from "vue-router";
import {routes}  from "./route";

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
                                        routes,
                                        mode: "history"
                                    })

new Vue({
            router,
            render: h => h(App)
        }).$mount('#app')
