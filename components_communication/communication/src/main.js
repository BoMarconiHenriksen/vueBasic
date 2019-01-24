import Vue from 'vue'
import App from './App.vue'

/* Skal ligge før new Vue, da den holder alle vores komponenter. Ellers har vi ikke adgang til komponenterne. */
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
