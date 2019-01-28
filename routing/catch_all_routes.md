# Setting up "catch all" routes / wildcards
Tilføj en route i bunden af routes.js, der fanger alle andre routes.  
* er wild card der catcher alle andre routes.  
##### routes.js
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
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    /* { path: '/redirect-me', redirect: '/user' } */ /* Til redirect. Giv en sti. */
    { path: '/redirect-me', redirect: { name: 'home' } }, /* Til redirect. Giv et objekt med til en named route. */
    { path: '*', redirect: '/' } /* Redirecter alle andre routes til home. */
];
```
