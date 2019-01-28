# Where am I? - Styling active links
Fjern li tags, og kun brug router link.  
Brug tag="li" for at lave en list item i stedet for en anchor tag.  
Derefter nester vi <a>(anchor tag).  
Det gør at router link nu vil sætte link op på list itemet.  
exact overskriver default så active kun marker den sti som brugeren har trykket på(exact match).  
```
<div>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
    </ul>    
</div>
```
