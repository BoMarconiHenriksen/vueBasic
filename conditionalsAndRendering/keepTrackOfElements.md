### Keep track of elements when using v-for
Brug en unik key for hvert element med v-bind eller :key.  
html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

<ul>
  <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
</ul>

<button @click="ingredients.push('spices')">Add New</button>

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
