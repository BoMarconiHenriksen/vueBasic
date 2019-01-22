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
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="exercise">
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
        <button v-on:click="alertMe">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
        <input type="text" v-on:keydown="getValues">
        <p>{{ value }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
        <input type="text" v-on:keydown.enter="getValues">
        <p>{{ value }}</p>
    </div>
</div>
```
js
```
new Vue({
	el: '#exercise',
  data: {
  	value: 0
   },
  methods: {
  	getValues: function(event) {
    	this.value = event.target.value;
    },
   	alertMe: function() {
    	alert('Alert!')
    }
  }
})
```
### Templates
Det er muligt at arbejde med javascript i templates.  
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="increase(2, $event)">Click Me</button>
  <button v-on:click="counter++">Click Me</button>
  
  <p>{{counter}}</p>
  <p>{{counter * 2 > 10 ? 'Greater than 10' : 'Smaler than 10'}}</p>
  
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
### Useing two way binding
v-model - Sæt 2 way binding op mellem input feltet og den property du vil binde i begge retninger.  
Opdater name i data, og i alle de komponenter, der bruger name.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <input type="text" v-model="name">
  <p>{{name}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	name: 'Max',
  },
  methods: {
  	
  }
})
```
### Computed - Reacting to changes with computed properties
computed - Kan bruges i en vue instance.  
Bruges som en property der er gemt i data objektet.  
Alt som gemmes i computed kan bruges som i et data objekt.  
result(methods) kaldes hver gang der renderes. Så brug den, hvis du ikke vil cache.  
computed kaldes ikke hver gang der renderes.  
Bruges ved synkron kode dvs ikke hvis du skal lave et fetch til en server.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <button v-on:click="secoundCounter++">Increase Secound</button>
  <p>Counter: {{counter}} | {{secoundCounter}}</p>
  <p>Result: {{result()}} | {{output}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    secoundCounter: 0,
  },
  computed: {
  	output: function() {
    console.log('computed')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },
  methods: {
  	result: function() {
    console.log('method')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
 });
```
### Alternatives to computed - watch
watch i vue instance. Udfører kode når data ændrer sig.  
counter skal match en data property.  
value er det parameter som vuejs bruger til de ændrede parameter.  
Brug computed når du kan er bedre optimeret end watch.  
Bruges ved asynkron kode.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <button v-on:click="secoundCounter++">Increase Secound</button>
  <p>Counter: {{counter}} | {{secoundCounter}}</p>
  <p>Result: {{result()}} | {{output}}</p>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    secoundCounter: 0,
  },
  computed: {
  	output: function() {
    console.log('computed')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },
  watch: {
  	counter: function(value) {
    	var vm = this;
      setTimeout(function() {
      	vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
  	result: function() {
    console.log('method')
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
 });
```
### Spar tid med shorthands
For Event så kan v-on erstattes med @
v-on:click --> @click  

v-bind:href --> :href  

### Exercise
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="exercise">
    <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
    <div>
        <p>Current Value: {{ value }}</p>
        <button @click="value += 5">Add 5</button>
        <button @click="value += 1">Add 1</button>
        <p>{{ result }}</p>
    </div>
    <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
    <div>
        <input type="text">
        <p>{{ value }}</p>
    </div>
</div>
```
js
```
new Vue({
	el: '#exercise',
  data: {
  	value: 0,
    
  },
  computed: {
  	result: function() {
    console.log('computed')
    	return this.value > 37 ? 'done' : 'not there yet';
    }
  },
  watch: {
  	value: function(value) {
    	var vm = this;
      setTimeout(function() {
      	vm.value = 0;
      }, 5000);
    }
  },
  
 });
```
### Basic dynamic styling with CSS classes
:bind - bind the class.  
Returner et objekt med styling fra computed.  
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <div 
    class="demo" 
    @click="attachRed = !attachRed"
    :class="divClasses"
    >
  </div>
  
  <div class="demo" :class="{red: attachRed}"></div>
  <div class="demo"></div>
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	attachRed: false
  }, 
  computed: {
  	divClasses: function() {
    	return {
      	red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});
```
css
```
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
```
### Dynamic styling with variables
html
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <div 
    class="demo" 
    @click="attachRed = !attachRed"
    :class="divClasses"
    >
  </div>
  
  <div class="demo" :class="{red: attachRed}"></div>
  <div class="demo" :class="color"></div>
  <hr>
  <input type="text" v-model="color">
</div>
```
js
```
new Vue({
	el: '#app',
  data: {
  	attachRed: false,
    color: 'green',
  }, 
  computed: {
  	divClasses: function() {
    	return {
      	red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});
```
css
```
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
```
### CSS dynamic styling without CSS classes
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <div class="demo" :style="{backgroundColor: color}"></div>
  
  <div class="demo" :style="myStyle"></div>
  <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
  
  <input type="text" v-model="color">
  <input type="text" v-model="width">
</div>
```
js  
```
new Vue({
	el: '#app',
  data: {
  	color: 'grey',
    width: 100,
  }, 
  computed: {
  	myStyle: function() {
    	return {
      	backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  }
  
});
```
html  
```
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
```
### Elements with array syntax



