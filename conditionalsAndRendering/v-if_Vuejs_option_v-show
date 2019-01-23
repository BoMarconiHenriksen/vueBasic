### v-show
Vuejs mulighed istedet for v-if, hvis et element skal vises.
Med v-show bliver elementet ikke fjernet som i v-if. Det er der stadig display er sat til none.  
Brug det, til at at hide et element, hvis det ikke skal fjernes helt fra DOMen.  
Default er v-if, da der er førrer elementer i DOM, og dermed bedre performance.  

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
	<p v-show="show">Do you also see me?</p>
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
