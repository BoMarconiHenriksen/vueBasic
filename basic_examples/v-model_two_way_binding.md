# v-model - Useing two way binding
v-model - Sæt 2 way binding op mellem input feltet og den property du vil binde i begge retninger.  
Opdater name i data, og i alle de komponenter, der bruger name.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <input type="text" v-model="name">
  <p>{{name}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	name: 'Max',
  },
  methods: {
  	
  }
})
```
