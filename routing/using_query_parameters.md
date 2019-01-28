# Using query parameters
Query parameter er de parameter, der er i slutningen af en url efter ?  
eks www.website.com/user?a=100&b=200  

##### UserDetail.vue
Tilføj query, der tager key value pairs. a er key og b(200) er value.  
```
<router-link 
    tag="button" 
    :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
    class="btn btn-primary">Edit User</router-link>
```

#### Extract the query data
##### UserEdit.vue
Der er adgang til query data på route objektet.  
```
<p>Locale: {{ $route.query.locale }}</p> 
<p>Analytics: {{ $route.query.q  }}</p>
```
