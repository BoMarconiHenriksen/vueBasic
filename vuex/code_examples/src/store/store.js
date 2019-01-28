import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        increment: ({ commit }, payload) => { 
            commit('increment', payload)
        },
        decrement: ({ commit }, payload) => { /* Kan bruge es6 destructuring(Hvis du bare skal have en property). */
            commit('decrement', payload)
        },
        asyncIncrement: ({ commit }) => {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        },
        asyncDecrement: ({ commit }) => {
            setTimeout(() => {
                commit('decrement');
            }, 1000);
        }
    }
});
