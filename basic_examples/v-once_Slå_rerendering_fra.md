# v-once - Slå rerender fra
Hvis vi vil beholde vores title.  
v-once render kun indholdet en gang. Det vil ikke blive rerenderet, hvis det ændrer sig senere.  

html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{title}}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
</div>
```
js
```
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com'
  }, 
  methods: {
  	sayHello: function() {
    this.title = 'Hello!';
    	return this.title;
    }
  }
});
```
