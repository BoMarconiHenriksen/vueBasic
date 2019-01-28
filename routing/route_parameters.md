# Setting up route parameters
Dynamiske routes, hvis vi f.eks. skal tilføje brugerens id.  
Tilføj user/:id i routes.js.  
```
{ path: '/user/:id', component: User }
```
Husk at router-link også skal ændres.  
Hardcoded eksempel.  
```
<router-link to="/user/10" tag="li" active-class="active" exact><a>User</a></router-link>
```
