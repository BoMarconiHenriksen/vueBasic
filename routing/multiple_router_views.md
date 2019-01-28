# Multiple router view (named router views)
Bruges ikke så ofte.  
Hvis du skal flytte din navigation alt efter, hvilken side du er på.  
Ligesom at det er muligt at give dine routes navn, så kan du også give dine router-views navn.  
##### App.js 
fjern ```<app-header></app-header>```  
```
<router-view name="header-top"></router-view>
<router-view></router-view> <!-- Default router hvor vi ikke giver den et specifik name.   -->
<router-view name="header-buttom"></router-view>
```
#### How to assign name fra router-view
Tilføj en ny property components, der er et objekt.  
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
    ] }
];
```
