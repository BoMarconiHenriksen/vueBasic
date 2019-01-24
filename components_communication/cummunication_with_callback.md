# Cummunication with callback functions
Alternativ til custom events.  
##### I parent
```
<app-user-detail 
    :name="name" 
    @nameWasReset="name = $event"
    :resetFn="resetName"></app-user-detail>
            
methods: {
    resetName: function() {
        this.name = 'max';
        }
    }
```
##### I child
```
<button @click="resetFn()">Reset Name with restFn()</button>

props: {
    name: {
        type: String
        },
        resetFn: Function
    }
```
