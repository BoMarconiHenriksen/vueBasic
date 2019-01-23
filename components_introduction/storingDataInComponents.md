### Storing data in components with data method
I en komponent skal data være en funktion.  
Problemet med et delt data objekt er

html  
```
<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="app">
  
  <my-cmp></my-cmp>
  <hr>
  <my-cmp></my-cmp>
</div>
```
js   
```
var data = { status: 'Critical' };

Vue.component('my-cmp', {
	data: function() {
  	return data;
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
  	changeStatus: function() {
    	this.status = 'Normal';
    }
  }
});


new Vue({
  el: '#app',
  
});
```
// output teksten ændrer sig i begge komponenter selv om du kun trykker på knappen for den ene komponent.  
### Løsning
Der skal returneres et nyt objekt i stedet for et delt objekt.  
Så vi har 2 forskellige objekter.  
this referer til de 2 forskellige objekter i memory.  
Det er derfor at data i en komponent skal være en funktion.  
html
```
<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="app">
  
  <my-cmp></my-cmp>
  <hr>
  <my-cmp></my-cmp>
</div>
```
js
```
// var data = { status: 'Critical' };

Vue.component('my-cmp', {
	data: function() {
  	return {
    	status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
  	changeStatus: function() {
    	this.status = 'Normal';
    }
  }
});


new Vue({
  el: '#app',
  
});
```
