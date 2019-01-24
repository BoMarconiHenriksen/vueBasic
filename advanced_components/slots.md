# Slots
Giver mulighed for at give data med, der kommer udefra og render det i child komponenten.  
Slots bruges til at distribuere content til andre komponenter.  

##### App.vue
h2 og p tagsene er det som gives med til child komponenten i det her tilfælde.  
```
<app-quote>
    <h2>The Quote</h2>
    <p>This is a quote!</p>
</app-quote>
```
##### Quote.vue (child)
```
<div>
    <slot></slot>
</div>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    
    h2 {
        color: red;
    }
</style>
```

Child components style vil overskrive den styling der gives med slot.  
Med slots der styler du i child komponenten, og gør alt andet f.eks. v-for ect i parent komponenten.  

