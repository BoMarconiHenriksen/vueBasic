### Registering components locally and globally
Vue.component(''), { } er globalt komponent.  
Det er muligt at gemme sin komponent i en variabel, og bruge den lokalt.  
Komponenten er nu kun tilgængelig i den instance.  
Eks.
```
new Vue({
  el: '#app',
  components: {
  	'my-cmp': cmp
  }
  
});
```
html  
```
<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="app">
  
  <my-cmp></my-cmp>
  <hr>
  <my-cmp></my-cmp>
</div>

<div id="app2">
  
  <my-cmp></my-cmp>
  <hr>
  <my-cmp></my-cmp>
</div>
```
js
```
// var data = { status: 'Critical' };

var cmp = {
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
};


new Vue({
  el: '#app',
  components: {
  	'my-cmp': cmp
  }
  
});

new Vue({
  el: '#app2',
  
});

```
