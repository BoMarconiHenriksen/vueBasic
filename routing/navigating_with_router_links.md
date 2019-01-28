# Navigation with router links
##### Header.vue
```
<template>
    <div>
        <ul class="nav nav-pills">
            <li role="presentation"><router-link to="/">Home</router-link></li>
            <li role="presentation"><router-link to="/user">User</router-link></li>
        </ul>    
    </div>
</template>
```
Se styling_active_links for at se de rigtige links.  
##### App.vue
```
<app-header></app-header>

import Header from './components/Header.vue';

export default {
    components: {
        appHeader: Header
    }
}
```
