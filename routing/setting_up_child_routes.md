# Setting up child routes(nested routes)
Subroutes i f.eks. User komponenten så vi kan loade forskellige komponenter der.  

##### routes.vue
```
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit }
    ] }
];
```
##### Vi skal sætte en ny router-view op i User komponenten.  
```
<router-view></router-view> <!-- Gør det muligt at loade subroutes. -->
```
Se navigating_to_nested_routes.  
