# Default event object 
Vi kan lytte til default event object(info om DOM når event sker).  
Det er mulgit at give event objektet med i en metode i vue instancen.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase">Click Me</button>
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
  	increase: function() {
    	this.counter++;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
```
