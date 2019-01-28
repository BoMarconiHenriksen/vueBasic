# Protect routes with guards
Har en bruger adgang til en bestemt route, og må han evt. forlade den.  
Eks. må en bruger edite userEdit siden.  
### Before enter guard
##### Start i main.js
Udfører dette før, hver router action. Skal have en funktion som argument.  
to - hvor vi skal hen.  
from - hvor vi kommer fra.  
next - en callback så requestet kan fortsætte sin rejse.  
Vær opmærksom på at funktionen bliver kaldt, hver gang der navigeres.  
```
router.beforeEach( ( to, from, next ) => {
  console.log('Globale beforeEach.');
  next(); /* Ellers går den ikke videre. Det er muligt at give '/' eller routing objektet med der indeholder en sti. Eller false hvis den skal stoppe. Eller redirect.*/
});  
```

### Besky en bestem route eks. userDetail
# routes.js
Tjekker på route niveau.  
Brug beforeEnter property.  
Den skal have en funktion.  
```
{ path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
    console.log('inside route setup.');
    next();
} },
```
Hele routes koden.  
```
export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: { /* Nu er vores header i bund for User. */
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup.');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    /* { path: '/redirect-me', redirect: '/user' } */ /* Til redirect. Giv en sti. */
    { path: '/redirect-me', redirect: { name: 'home' } }, /* Til redirect. Giv et objekt med til en named route. */
    { path: '*', redirect: '/' } /* Redirecter alle andre routes. */
];
```

### Tjek i selve komponenten
```
beforeRouteEnter(to, from, next) { /* livecycle hook. */
    if(true) { /* Authenticate brugeren her. */
        next();
    } else {
        next(false);
    }
    /* Da komponenten ikke er lavet har vi ikke adgang til this.link. */
    //next(vm => { /* Kalder komponenten. Tager en callback. vm = view model */
    //    vm.link; /* Bliver udført når komponenten er loadet, og derfor har vi nu adgang til link. */
    //}); 
```
For alle 3 metoder husk at du ikke har adgang til komponenterne. Kun de routes du kommer fra.  

Hele koden.  
```
<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit', 
                    params: { 
                        id: this.$route.params.id /* this. fordi vi nu er i vue instance. */
                    }, query: { 
                        locale: 'en', 
                        q: 100 
                    },
                    hash: '#data', /* Nu får vi #data med i urlen, men den scroller ikke ned. */
                } 
            }
        },
        beforeRouteEnter(to, from, next) { /* livecycle hook. */
            if(true) { /* Authenticate brugeren her. */
                next();
            } else {
                next(false);
            }
            /* Da komponenten ikke er lavet har vi ikke adgang til this.link. */
            //next(vm => { /* Kalder komponenten. Tager en callback. vm = view model */
            //    vm.link; /* Bliver udført når komponenten er loadet, og derfor har vi nu adgang til link. */
            //}); 
        }
    }
</script>
```

### beforeLeave guard
Må en bruger forlade vores route.  
Kaldes lige inde en bruger naviger væk.  
##### UserEdit.vue
```
<button class="btn btn-primary" @click="confirmed = true">Confirm</button>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next) {
            /* Komponenten er lavet så vi har adgang til komponenten. */
            if(this.confirmed) {
                next();
            } else {
                if(confirm('Are you sure?')) { /* Forhindre hvis en bruger ved en fejl trykker på back button. */
                next();  
                } else {
                    next(false);
                }
            }
        }
    }
</script>
```
