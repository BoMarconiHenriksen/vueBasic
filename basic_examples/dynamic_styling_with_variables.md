# Dynamic styling with variables
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
