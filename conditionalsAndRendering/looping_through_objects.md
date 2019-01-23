###

html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

<hr>
 <ul>
   <li v-for="person in persons">{{ person.name }}</li>
 </ul>
<hr>

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
### loop through key value pair
value er værdien af hver property i objektet.  
html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">

 <ul>
   <li v-for="person in persons">
       <span v-for="value in person">{{ value }}</span>
     
   </li>
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
#### Get the key

html
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
 <ul>
   <li v-for="person in persons">
       <div v-for="(value, key) in person">{{ key }}: {{ value }} </div>
     
   </li>
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
#### Get the index
html
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
<ul>
   <li v-for="person in persons">
       <div v-for="(value, key, index) in person">{{ key }}: {{ value }} ({{ index }})</div>
     
   </li>
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
