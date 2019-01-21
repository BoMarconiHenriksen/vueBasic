# Eksempler i jsfiddle
https://jsfiddle.net/

### Basic eksempel
new Vue({}) - er en konstruktør funktion, der kontroller en instance af kode, der renderes til skærmen.
	Tager et objekt som parameter.

el - tager en string, der fortæller hvilken del af html koden, der skal kontrolleres af denne vue instances.

data - Her gemmes al data til view instancen. 

html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <p>
  {{ title }}
  </p>
</div>
```
js
```
new Vue({
el: '#app',
  data: {
    title: 'Hello World!'
  }
});
```

### Eksemple - Ændre title
v-on - Fortæller at vue skal lytte til en event eks. v-on:input="changeTitle" lytter til input eventet, og kalder metoden changeTitle.  
Metoden skrives i vue instancen med keywordet methods:  
Methods er et objekt, hvor du kan skrive de metoder der skal bruges i templaten og vue instancen.  

this.title - referer til data objektet.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>
```
js
```
new Vue({
el: '#app',
data: {
	title: 'Hello World!'
},
methods: {
    changeTitle: function(event) {
      this.title = event.target.value
    }
  }
});
```
### Hvad har vi adgang til fra en vue instance
Vi har adgang til det der er i data, og også det som er i metoderne.

html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }}</p>
</div>
```
js  
```
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  }, 
  methods: {
  	sayHello: function() {
    	return 'Hello!';
    }
  }
});
```
### Er det muligt at få adgang til data objektet fra en metode i en vue instance
Ja, med this. this virker kun i vue instancen, og ikke i template.  
js  
```
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  }, 
  methods: {
  	sayHello: function() {
    	return this.title;
    }
  }
});
```
### Binding to attributes
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

### Hvad er directives?
Det er en instruktion, du placer i din kode. Der binder noget til dine data eller funktioner i vuejs instancen. Se ovenstående eksempel.  

### Slå rerender fra
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
### Output raw HTML
Brug kun hvis du ved at linket kommer fra et sikkeret sted for at undgå xss.  
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
