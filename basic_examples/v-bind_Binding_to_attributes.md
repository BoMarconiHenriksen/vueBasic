# Binding to attributes
Det er ikke muligt at bruge {{}} på html elementer.  
Brug det directiv, der hedder v-bind.  

html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
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
    	return this.title;
    }
  }
});
```
