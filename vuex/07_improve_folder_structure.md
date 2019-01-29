# Improve folder structure
Brug modules.  
Modules er at dele store.js op i flere filer.   
Flyt state, getters, mutations og actions for hver property i staten ud i hver sin javascript fil.  
##### I store folderen lav en modules folder.  

##### counter.js
```
const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
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
```
##### store.js
Tilføj modules property i store.js for at hente counter.js ind i din store.  
```
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0,
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        updateValue({ commit }, payload) {
            commit('updateValue', payload);
        }
    },
    modules: { /* Importing modules. */
        counter
    }
});
```
