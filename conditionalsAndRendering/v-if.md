### v-if
##### Show and hide elements to the DOM
v-if kan bindes til en condition eller property, der resulter i enten true eller false.   
v-if attaches eller detaches elementer til DOMen. Se source kode. Når den er false er der kun en kommentar. Fjerner elementet helt.  
Visers også nestet elementer.  

##### Kan kombineres med v-else
v-else referer til den v-if, der kommer lige før.  
Ved flere conditions lav en ny v-if eller se v-else-if.  

https://vuejs.org/v2/guide/conditional.html  

html
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
	<p v-if="show">You can see me! <span>Hello!</span></p>
  <p v-else>Now you see me!</p>
	<p>Do you also see me?</p>
  <button @click="show = !show">Switch</button>
</div>
```
js
```
new Vue({
	el: '#app',
	data: {
		show: true
	}
})
```

##### v-else-if
```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
