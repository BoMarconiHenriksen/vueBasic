### v-for 
v-for løber gennem et array
html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

<ul>
  <li v-for="ingredient in ingredients">{{ ingredient }}</li>
</ul>

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
### Vis index af elementet
Med ( ) kan du hente indekset af, hvert element ud.  
html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

<ul>
  <li v-for="(ingredient, index) in ingredients">{{ ingredient }} ({{ index }})</li>
</ul>

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
