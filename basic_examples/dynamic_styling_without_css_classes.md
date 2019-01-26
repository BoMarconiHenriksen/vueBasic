# CSS dynamic styling without CSS classes
html  
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>

<div id="app">
  <div class="demo" :style="{backgroundColor: color}"></div>
  
  <div class="demo" :style="myStyle"></div>
  <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div> <-- Elements with array syntax. -->
  
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
