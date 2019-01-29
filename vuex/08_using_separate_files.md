# Using separate files
Hvis du har properties som ikke hører til et modul f.eks. en heading.  
I store folder laves en javascript fil.  
Dine modules kan du også splitte op i filer, hvis det er.  
##### actions.js
```
export const updateValue = ({ commit }, payload) => {
    commit('updateValue', payload);
};
```
##### store.js
```
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions'; /*  * laver et objekt, hvor alt der bliver eksporteret er properties i det. */
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0,
    },
    getters,
    mutations,
    actions,
    modules: { /* Importing modules. */
        counter
    }
});
```
