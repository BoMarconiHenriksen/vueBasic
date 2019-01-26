# Templates
Det er muligt at arbejde med javascript i templates.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <button v-on:click="counter++">Click Me</button>
  
  <p>{{counter}}</p>
  <p>{{counter * 2 > 10 ? 'Greater than 10' : 'Smaler than 10'}}</p>
  
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{x}} / {{y}}
    - <span v-on:mousemove.stop>DEAD SPOT</span>  
  </p>
  <input type="text" v-on:keyup.enter.space="alertMe">
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
    },
   	alertMe: function() {
    	alert('Alert!')
    }
  }
})
```
