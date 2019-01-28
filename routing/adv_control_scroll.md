# Controlling the scroll behavior
I main.js giv scrollBehavior med.  
##### main.js
```
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
```
