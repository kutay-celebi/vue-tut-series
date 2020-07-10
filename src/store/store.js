import Vue     from "vue";
import Vuex    from "vuex"
import counter from "./module/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
                                        // also define another states etc.
                                        state    : {},
                                        getters  : {},
                                        mutations: {},
                                        actions  : {},
                                        modules  : {
                                            counter: {
                                                namespaced: true,
                                                ...counter
                                            }
                                        }
                                    })