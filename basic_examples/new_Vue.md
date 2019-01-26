# new Vue
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
