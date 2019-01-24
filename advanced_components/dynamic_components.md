# Switching Multiple components with dynamic components
Afhænigt af, hvilken button, der trykkes vises forskellige komponenter.  
component bindes til selectedComponent, og komponenten loades.  
Som udgangspunkt destroyes en dynamisk component. Det kan dog ændres.  

##### App.vue
```
<button @click="selectedComponent = 'appQuote'">Quote</button>
<button @click="selectedComponent = 'appAuthor'">Author</button>
<button @click="selectedComponent = 'appNew'">New</button>

<component :is="selectedComponent">
    <p>Default content</p>
</component>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                selectedComponent: 'appQuote' /* appQuote er default komponenten. */
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>
```

### Keep dynamic components alive
Det gøres med keep-alive componenten.  
```
<keep-alive>
    <component :is="selectedComponent">
        <p>Default content</p>
    </component>
</keep-alive>
```

### Destroy a component that is keept alive
f.eks. hvis man naviger væk fra komponenten.  
Life cycle hook deactivated(). Når vi er på vores komponent, og loader en anden komponent.  
Life cycle hooken activated() kaldes når vi loader den aktive komponent.  

##### New.vue
```
<script>
    export default {
       data: function() {
           return {
               counter: 0
           }
       },
       /* Når vi er på vores komponent, og loader en anden komponent. */
       deactivated() {
           console.log('Deactivated');
       },
       /* Kaldes når vi loader den aktive komponent. */
       activated() {
           console.log('Activated');
       }
    }
</script>
```
