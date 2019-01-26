# v-html - Output raw HTML
### Brug kun hvis du ved at linket kommer fra et sikkeret sted for at undgå xss.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{title}}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
  <hr>
  <p v-html='finishedLink'></p>
</div>
```
js
```
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  }, 
  methods: {
  	sayHello: function() {
    this.title = 'Hello!';
    	return this.title;
    }
  }
});
```
