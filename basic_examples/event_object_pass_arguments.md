# Passing your own arguments with Events
Vuejs fetcher automatisk event argumenter, og gemmer det i en variabel som vi kan få adgang til med $event.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	increase: function(step, event) {
    	this.counter += step;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
```
