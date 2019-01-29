# Two-way binding(v-model) and vuex
Da vores computed value kun er en getter så kan den ikke sætte state, hvis staten ændres i et input felt.  
Det er muligt at lave computed methods til et objekt, og lave en get og en set metode.  

##### store.js
```
state: {
        counter: 0,
        value: 0,
    },

// tilføj en getter.
value: state => {
    return state.value;
}

// Tuilføj en mutations.
updateValue: (state, payload) => {
    state.value = payload;
}

// Tilføj actions.
updateValue({ comit }, payload) {
    commit('updateValue', payload);
}
```
##### App.vue
```
<input type="text" v-model="value">
<p>{{ value }}</p>

computed: {
    value: {
        get() {
            return this.$store.getters.value; /* value er navnet på den getter, der blev lavet i store.js */
        },
        set(value) { /* set() bruges sjældent. */
            this.$store.dispatch('updateValue', value);
        }
    }
},
        
```
