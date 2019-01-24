# cummunication_event_bus
Brug et centralt objekt til at give data videre.  
Lav en ny vue instance i main.js  

##### main.js
```
/* Skal ligge før new Vue, da den holder alle vores komponenter. Ellers har vi ikke adgang til komponenterne. */
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
```


##### userEdit.vue
Importer eventBus.  
Nu emittes det på eventBus instancen.  
```
<script>
    import { eventBus } from '../main.js';

    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                eventBus.$emit('ageWasEdited', this.userAge)
            }
        }
    }
</script>
```
##### userDetail.vue
Tilføj created() der er en livscycle hook.  
Bruges til at lytte efter events.  
```
<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            name: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            changeName() {
                return this.name.split("").reverse().join(""); /* Reverse the name. */
            },
            resetName: function() {
                this.name = 'max'; /* Til en start ændre det kun navnet i child komponenten. */
                this.$emit('nameWasReset', this.name); /* Fyrer en event af, der giver det nye name med. */
            }
        },
        /* Bruges til eventBus. */
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            })
        }
    }
</script>
```
