# How action improve mutation and how to use action
action er en funktion, hvor vi kan køre asynkrone metoder.  
dispatch fra komponent til actions.  
commit fra actions til mutations.  
context giver os adgang til commit metoden.  
Selv om du ikke har asynkron kode så er det god praksis at have en actions til at commit din mutation.  

##### actions gør det her. Vi behøver ikke at kode det her. 
```
increment(by) { /* Kan give et parameter med. */
    this.$store.dispatch('increment', by);
}
```
Vi bruger mapActions til at få adgang til vores actions.  
Når du giver et parameter med, kaldes det ofte payload i mutations, da det er et payload af vores action.  
Mutation får state og payload med som parameter.  

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
### Giv et parameter med
store.js
```
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
```
Counter.js
```
<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
            ])
        }
    }
</script>
```
### Giv flere parameter med
Det er ikke muligt at give flere argumenter med i increment metoden i button.  
For at give flere parameter med skal man give et objekt.  
```
<button class="btn btn-primary" @click="increment({ by: 50, duration: 500 })">Increment</button>
```
##### store.js
```
actions: {
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
        }
    }
```
##### AnotherCounter.js
```
<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 500 })">Decrement</button>
    </div>
</template>

<script>
    //import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            /* ...mapMutations([
                'increment',
                'decrement',
            ]) */
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement',
            ])
        }
    }
</script>
```
