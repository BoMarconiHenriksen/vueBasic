# Using interceptors
Funktioner der udføres ved hvert request fra applikationen eller efter hvert response fra serveren.  
.use tager en funktion.
config = recives request configuration as an argument.  

##### main.js
```
axios.interceptors.request.use(config => {
  console.log('Request interceptor ', config);
  return config; /* Skal returneres ellers blokeres requestet. */
});

axios.interceptors.response.use(res => {
  console.log('Res interceptors ', res);
  return res; /* Skal returneres ellers vil det ikke sendes videre. */
});
```
##### Det er også muligt at fjerne interceptors
eject skal have interceptorens id. Den returneres fra use metoden.  
```
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);
```
