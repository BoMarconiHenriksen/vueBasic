# Useing custom events for child parent cummunication
Husk der er forskel på primitiv types og reference types som objekter og arrays.  

# Child component
I hver vue instance har du adgang til emit() med this.$emit();  
$ betyder, at det er en build in metode.  
```
methods: {

            resetName: function() {
                this.name = 'max'; /* Til en start ændre det kun navnet i child komponenten. */
                this.$emit('nameWasReset', this.name); /* Fyrer en event af, der giver det nye name med. */
            }
        }
```
# Parent component
I parent component lytter du efter en event fra child komponenten med v-on:.  
$event referer til de data, der bliver sendt med eventet.  
```
<app-user-detail :name="name" @nameWasReset="name = $event"></app-user-detail>
```
