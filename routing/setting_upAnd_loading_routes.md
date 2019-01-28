# Setting up and loading routes
Routes sættes op i main.js. Enten direkte eller fra en fil, der inporteres.  

##### path
path er det navn, der vises i urlen.  

##### routes.js
```
import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User }
];
```
##### main.js
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

/* Vue.use bruges til plugins. */
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```
##### App.js
```
<router-view></router-view> <!-- Buildin component. -->
```
