# Navigating to nested routes
Brug router-link i stedet for li.  
Normal vil ```to="/user/1"``` være dynamisk generet fra et array.  
Du kan binde det med : eks. ```:to="/user/1"```

##### UserStart.vue
```
<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link 
                tag="li" 
                to="/user/1" 
                class="list-group-item" 
                style="cursor: pointer">User 1</router-link>

            <router-link 
                tag="li" 
                to="/user/2"
                class="list-group-item" 
                style="cursor: pointer">User 2</router-link>
            <router-link 
                tag="li" 
                to="/user/3"
                class="list-group-item" 
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>
```
##### UserDetail.vue
```
<div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
</div>
```
