###
Hvis du f.eks. vil udskrive en overskrift med fruit og derefter indeksnummeret.  

html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

<ul>
  <li v-for="(ingredient, i) in ingredients">{{ ingredient }} ({{ i }})</li>
</ul>

<template v-for="(ingredient, index) in ingredients">
  <h1>{{ ingredient }}</h1>
  <p>{{ index }}</p>
</template>

</div>
```
js  
```
new Vue({
	el: '#app',
	data: {
		ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
    	{name: 'Bob', age: 27, color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'}
    ]
	}
});
```
