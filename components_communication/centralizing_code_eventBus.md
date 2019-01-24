# Centralizing code in an eventBus
emit logic kan flyttes til eventBus instancen.
Dog husk at kommunikationen mellem komponenter kan blive meget kompliceret, og derfor kan man bruge vueex.  
##### main.js
```
/* Skal ligge før new Vue, da den holder alle vores komponenter. Ellers har vi ikke adgang til komponenterne. */
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});
```
##### UserEdit.vue
```
<script>
    import { eventBus } from '../main.js';

    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                //this.$emit('ageWasEdited', this.userAge) /* Laver en event og sender userAge tilbage til parent. */
                //eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge); /* Kald metoden i eventBus instancen i stedet for. */
            }
        }
    }
</script>
```
