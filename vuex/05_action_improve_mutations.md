# How action improve mutation and how to use action
action er en funktion, hvor vi kan køre asynkrone metoder.  
dispatch fra komponent til action.  
commit fra action til mutations.  
context giver os adgang til commit metoden.  
Selv om du ikke har asynkron kode så er det god praksis at have en actions til at commit din mutation.  

##### store.js
```
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
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    },
    actions: {
        increment: context => { /* context giver os adgang til commit metoden. */
            context.commit('increment')
        },
        decrement: ({ commit }) => { /* Kan bruge es6 destructuring(Hvis du bare skal have en property). */
            commit('decrement')
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
```
##### Counter.vue
Actions: 
Med action behøver ikke at skrive ```this.$store.dispatch('increment', by);``` Det gøres automatisk. by er hvis der gives et parameter med.  
Hvis der gives et parameter med så navngives det ofte payload i store.js ```asyncIncrement: ({ commit }, payload)```  
Brug payload til at give et parameter med.  
##### Giv flere parameter med




