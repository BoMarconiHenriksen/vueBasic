# Mapping getters to properties
Hvad nu hvis vi har flere getters?  
Få adgang til dine getters uden brug af computed.  
... betyder at javascript tager alle de properties og metoder ud af objektet og lav seperate key value pairs af dem (... hedder spread operator).  
... virker ikke i det her eksempel, da det er en ældre version af Babel. Derfor npm install --save-dev babel-preset-stage-2  
Tilføjes til babelrc
```
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}
```

#### Hent state fra getters med mapGetters
```
<template>
<div>
     <p>Counter is: {{ doubleCounter }}</p>
     <p>Number of clicks: {{ stringCounter }}</p>
</div>
   
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: { 
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
        ]),
        ourOwnComputed() {
            
        }
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
