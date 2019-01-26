# Computed - Reacting to changes with computed properties
computed - Kan bruges i en vue instance.  
Bruges som en property der er gemt i data objektet.  
Alt som gemmes i computed kan bruges som i et data objekt.  
result(i methods) kaldes hver gang der renderes. Så brug den, hvis du ikke vil cache.  
##### computed kaldes ikke hver gang der renderes.  
Bruges ved synkron kode dvs ikke hvis du skal lave et fetch til en server.  
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
  methods: {
  	result: function() {
    console.log('method')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
 });
```
