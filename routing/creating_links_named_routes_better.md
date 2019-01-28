# A better way of creating links with named routes
Det er muligt at give vores routes names.  
Det gøres i routes.js.  

##### routes.js
userEdit er nu navnet på denne route.  
```
{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
```
##### UserDetail
Det er muligt at tilføje path i objektet.  
userEdit fra routes.js.  
Nu behøver vi ikke at skrive hele stien.  
params - key value pairs af parameterne som skal gives med(i det her tilfølde skal den have id med).  
```
<router-link 
    tag="button" 
    :to="{ name: 'userEdit', params: { id: $route.params.id } }"
    class="btn btn-primary">Edit User</router-link> <!-- A better way of creating links with named routes -->
```

#### Denne her fremgangsmåde kan bruges i alle router-links. Altså give et objekt med.  
##### eks. i User.vie 
```
this.$router.push('/');
this.$router.push( { path: '/' } ); /* en anden mulighed. */
this.$router.push( { name: 'home' } ); /* en tredje mulighed. name: 'home' skal tilføjes i routes.js */
```
