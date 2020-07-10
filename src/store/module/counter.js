// export const GET_DOUBLE_COUNTER = "counter/getter/DOUBLE_COUNTER";
// export const INCREMENT_COUNTER = "counter/action/DOUBLE_COUNTER";

const state = {
    counter: 1
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    }
}

const mutations = {
    // mutations work synchronous but action
    increment: state => {
        state.counter++
    },
    decrement: state => {
        state.counter--
    }
};

const actions = {
    incrementAction: injectee => {
        setTimeout(() => injectee.commit("increment"), 1000);

    },
    decrementAction: injectee => {
        setTimeout(() => injectee.commit("decrement"), 1000);

    }
}

export default {
    state,
    getters,
    mutations,
    actions
};