### Alternative v-if
Hvis du vil fjerne eller tilføje en template.  
template tags(fra html 5) renderes ikke i DOMen.  
Fordelen med en template er at du kan wrappe flere elementer med en v-if.  
html  
```
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<div id="app">
	<p v-if="show">You can see me! <span>Hello!</span></p>
  
  <template v-if="show">
    <h1>Heading</h1>
    <p>Inside a template</p>
  </template>
  
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
