# Alternatives to computed - watch
watch i vue instance. Udfører kode når data ændrer sig.  
counter skal match en data property.  
value er det parameter som vuejs bruger til de ændrede parameter.  
Brug computed når du kan er bedre optimeret end watch.  
Bruges ved asynkron kode.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <button v-on:click="secoundCounter++">Increase Secound</button>
  <p>Counter: {{counter}} | {{secoundCounter}}</p>
  <p>Result: {{result()}} | {{output}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    secoundCounter: 0,
  },
  computed: {
  	output: function() {
    console.log('computed')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },
  watch: {
  	counter: function(value) {
    	var vm = this;
      setTimeout(function() {
      	vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
  	result: function() {
    console.log('method')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
 });
```
