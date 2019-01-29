import * as types from '../types';

const state = {
    counter: 0,
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    increment: ({ commit }, payload) => { 
        commit('increment', payload)
    },
    decrement: ({ commit }, payload) => { /* Kan bruge es6 destructuring(Hvis du bare skal have en property). */
        commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by); /* Når der gives flere parameter med. */
        }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrement', payload.duration);
        }, payload.duration);
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};

