# Useing multiple slots
Render h2 og p tag 2 forskellige steder.  

##### App.vue
```
<app-quote>
    <h2 slot="title">{{ quoteTitle }}</h2>
    <p slot="content">This is a quote!</p>
</app-quote>
```
##### Quote.vue
```
<div>
    <div class="title">
        <slot name="title"></slot>
    </div>
    <hr>
    <div>
        <slot name="content"></slot>
    </div>
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

    .title {
        font-style: italic;
    }
</style>
```
