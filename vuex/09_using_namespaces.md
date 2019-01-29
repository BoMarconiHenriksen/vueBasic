# Using namespaces to avoid naming problems
Da alle filer bliver merged i store.js har de samme namespace. Derfor er det vigtigt at de har unikke navne ellers vil der opstå fejl, når de bliver merget sammen.  
Bruge types.js i store folderen til at lave globale variabler. Sikrer at navne er unikke, og at stringsene er unikke fordi vi bruger prefix med modulenavnene.   
Set up a dynamic property name i counter.js.  
[ ] assign name on runtime. Så den henter names from types.js  

I vue 2.1 er det muligt at bruge auto-namespacing https://github.com/vuejs/vuex/releases/tag/v2.1.0  
##### For store applikationer kan du lave en types.js fil i store folderen.  

##### types.js
```
export const DOUBLE_COUNTER = 'counter/DOUBLE_COUNTER'; /* Indiker hvilken del den hører til. */
export const CLICK_COUNTER = 'counter/CLICK_COUNTER';
```
##### counter.js i modules folderen
```
import * as types from '../types';

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' clicks';
    },
};
```
##### AnotherResult.vue
Husk at ændre de globale variabler.  
```
<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: { 
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER,
            }),
        
    }
        /* 
        computed: mapGetters({
            propertyName: 'doubleCounter',
            propertyName: 'stringCounter',
        })
        */
    }
</script>
```
##### Result.vue
```
<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: { 
            ...mapGetters({
                counter: types.DOUBLE_COUNTER,
                }),
        
        }
    }
</script>
```
