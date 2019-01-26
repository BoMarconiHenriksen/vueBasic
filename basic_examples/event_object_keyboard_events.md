# Lytte til keyboard Events
Du kan bruge keybord modifyers.  
keyup er en event der sættes igang, når du slipper en tast.  
Med keybord modifyers kan du sætte en vent igang når der trykkes noget bestemt f.eks. keyup.enter  
De kan også chanes f.eks. keyup.enter.space  
https://vuejs.org/v2/guide/events.html#Key-Modifiers  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{counter}}</p>
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
