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
### Excercise
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="exercise">
   <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{name}} {{age}}</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>{{multiplyAge()}}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>{{randomFloat()}}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
        <img :src="linkToPicture"     style="width:100px;height:100px">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <input :value="name" type="text">
    </div>
</div>
```
js  
```
new Vue({
	el: '#exercise',
  data: {
  	name: 'Bo',
    age: 100,
    linkToPicture: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  },
  methods: {
  	multiplyAge: function() {
    	return this.age * 3;
    },
    randomFloat: function() {
    	return Math.floor(Math.random() * 101);
    }
  
  }
})
```
### Listening to events
##### v-on
Lytter efter en event. Tager et argument. Den event som den skal lytte efter eks. click.  
Derefter den funktion, der skal kaldes.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase">Click Me</button>
  <p>{{counter}}</p>
</div>
```
js  
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
  },
  methods: {
  	increase: function() {
    	this.counter++;
    }
  }
})
```
### Default evet object 
Vi kan lytte til default event object(info om DOM når event sker).  
Det er mulgit at give event objektet med i en metode i vue instancen.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase">Click Me</button>
  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	increase: function() {
    	this.counter++;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
```
### Passing your own arguments with Events
Vuejs fetcher automatisk event argumenter, og gemmer det i en variabel som vi kan få adgang til med $event.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoordinates">Coordinates: {{x}} / {{y}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	increase: function(step, event) {
    	this.counter += step;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
```
### Modefying an event
mousemove.stop - vue har en lille funktion, der stopper propagation.  
Det er en modyfier.  
Der findes også andre som .prevent som er preventDefault.  
Det er muligt at chaine dem feks. .stop.prevent  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{x}} / {{y}}
    - <span v-on:mousemove.stop>DEAD SPOT</span>  
  </p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	increase: function(step, event) {
    	this.counter += step;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    },
   
  }
})
```
### Lytte til keyboard Events
Du kan bruge keybord modifyers.  
keyup er en event der sættes igang, når du slipper en tast.  
Med keybord modifyers kan du sætte en vent igang når der trykkes noget bestemt f.eks. keyup.enter  
De kan også chanes f.eks. keyup.enter.space  
https://vuejs.org/v2/guide/events.html#Key-Modifiers  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{x}} / {{y}}
    - <span v-on:mousemove.stop>DEAD SPOT</span>  
  </p>
  <input type="text" v-on:keyup.enter.space="alertMe">
</div>
```
js  
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
  	increase: function(step, event) {
    	this.counter += step;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      this.y = event.clientY;
    },
   	alertMe: function() {
    	alert('Alert!')
    }
  }
})
```
### Exercise Events





