import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

/* Vue.use bruges til plugins. */
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) { /* Bruges til at scrolle ved # i urlen. */
    if(savedPosition) { /* Brugeren trykker på tilbage, og ender hvor han var. */
      return savedPosition;
    }
    if(to.hash) { /* Hvis routen har # */
      return { selector: to.hash };
    }
    return { x: 0, y: 0 }; /* Scroll til toppen af siden. { x: 0, y: 1200 } scroll 1200 px ned. */
  },
  routes
});

router.beforeEach( ( to, from, next ) => {
  console.log('Globale beforeEach.');
  next(); /* Ellers går den ikke videre. Det er muligt at give '/' eller routing objektet med der indeholder en sti. Eller false hvis den skal stoppe. Eller redirect.*/
}); 

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
