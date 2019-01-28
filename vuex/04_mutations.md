# Using mutations
Mutations bruges når state i storen, skal ændres.  
Når du bruger commit skal det være en string, der gives med som parameter.  
#### Mutations skal være synkrone
Ingen asynkron kode i en mutation.  

##### Counter.vue
```
<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement',
            ])
            
        }
    }
</script>
```
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
    }
});
```
