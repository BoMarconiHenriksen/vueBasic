# Understanding Routing Modes(Hash vs History)
Hash er default.  
Det før # sendes til serveren, og det efter # håndteres af applikationen.  

##### History
På serveren returner index.html også 404 errors.  
I index.html filen bliver vue appen startet, og tager over.  

Derudover i main.js tilføj  
```
const router = new VueRouter({
  mode: 'history', <!-- Skal tilføjes for at undgå # i urlen. -->
  routes
});
```
