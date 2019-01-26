# v-on -  Eksemple Ændre title
v-on - Fortæller at vue skal lytte til en event eks. v-on:input="changeTitle" lytter til input eventet, og kalder metoden changeTitle.  
Metoden skrives i vue instancen med keywordet methods:  
Methods er et objekt, hvor du kan skrive de metoder der skal bruges i templaten og vue instancen.  

##### this.title - referer til data objektet.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>
```
js
```
new Vue({
el: '#app',
data: {
	title: 'Hello World!'
},
methods: {
    changeTitle: function(event) {
      this.title = event.target.value
    }
  }
});
```
### Listening to click events with v-on
Lytter efter en event. Tager et argument. Den event som den skal lytte efter eks. click.  
Derefter den funktion, der skal kaldes.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase">Click Me</button>
  <p>{{counter}}</p>
</div>
```
js  
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
  },
  methods: {
  	increase: function() {
    	this.counter++;
    }
  }
})
```
