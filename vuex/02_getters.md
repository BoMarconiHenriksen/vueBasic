# Using getters
I stedet for direkte at tilgå state så kan vi lave en getter.  
En getter vil hente state fra store og lave de udregninger, der skal gøres, og så henter komponenten resultatet fra getters.  
##### I store laves en getter.  
```
export const store = new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
});
```
##### AnotherResult.vue
Hent resultat fra en getter.  
```
<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>
```
##### Result.vue
```
<script>
    export default {
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            }
        }
    }
</script>
```
