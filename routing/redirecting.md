# Redirecting
I routes.js efter de almindelige routes tilføjer du redirect.  
Brug redirect key til at specificer en path til at redirect brugeren.  
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
    { path: '/redirect-me', redirect: { name: 'home' } } /* Til redirect. Giv et objekt med til en named route. */
];
```
