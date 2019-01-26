# Excercise
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