### Introduction to components
A component extends a Vue instance.  
Vue.component('my-cmp') er navnet på komponenten.  
Vue.component('my-cmp') { } Det andet argument er objektet, der repræsenter selve komponenten.  
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
Vue.component('my-cmp', {
	data: function() {
  	return {
    	status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }}</p>'
});


new Vue({
  el: '#app',
  
});
```
