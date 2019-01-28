# Using the centralized state
Dette er ikke den bedste løsning.  
Hvis du skal have en til komponent, der skal lave ekstra udregninger kan du få dublicate kode. Bliver svært at vedligeholde.  Se AnotherResult komponenten.  
##### store.js - Holds the store.  
```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
    }
});
```
##### main.js
```
import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  store, 
  render: h => h(App)
})
```
##### counter.vue
```
<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>
```
##### result.vue
```
<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter;
            }
        }
    }
</script>
```

