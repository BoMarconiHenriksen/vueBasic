# Exercise Events
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="exercise">
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
        <button v-on:click="alertMe">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
        <input type="text" v-on:keydown="getValues">
        <p>{{ value }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
        <input type="text" v-on:keydown.enter="getValues">
        <p>{{ value }}</p>
    </div>
</div>
```
js
```
new Vue({
	el: '#exercise',
  data: {
  	value: 0
   },
  methods: {
  	getValues: function(event) {
    	this.value = event.target.value;
    },
   	alertMe: function() {
    	alert('Alert!')
    }
  }
})
```
