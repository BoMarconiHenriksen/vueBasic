# Loading routes lazy
Del din bundlede fil op i flere filer så dele af navigation kun hentes når den skal bruges.  
##### routes.js
```
/* 
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
*/
import Home from './components/Home.vue';
import Header from './components/Header.vue';


/* Lazy load with webpack */
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => { /* Når vi vil bruge denne her sti så... */
        resolve(require('./components/user/User.vue')); /* ... udfør denne funktion. Er som et promise der resolver den sti, der skal bruges.*/
    }, 'user'); /* Bruges til at grupper så du kan dele dine bundles op. */
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

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
