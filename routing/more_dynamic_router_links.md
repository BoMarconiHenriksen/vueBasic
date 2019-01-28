# Making router links more dynamic
Giv et dynamic path med.  
to="/user" hvor button tager dig til.  
Bind og parse en string med id.  
Der findes et alternativ.  Se creating_links_named_routes_better.  
##### I UserDetail
```
<router-link 
    tag="button" 
    :to="'/user' + $route.params.id + '/edit'"
    class="btn btn-primary">Edit User</router-link>
```
