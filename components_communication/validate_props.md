### Validate props
Valider datatypen af de props, der kommer ind.  
Hvis du vil valider datatypen, så skal props være et objekt.  
```
props: {
            name: String
        }
```
Kan også være forskellige datatyper. Brug array.  
```
props: {
            name: [String, Array]
        }
```
Brug required, hvis der altid skal gives en string med.  
```
props: {
            name: {
                type: String,
                required: true
            }
        }
```
Det er også muligt at sætte en default værdi.  
```
props: {
            name: {
                type: String,
                default: 'Max'
            }
        }
```
Hvis det er et objekt eller array, der er default, så skal det returneres som en funktion.  
```
props: {
            name: {
                type: Object,
                default: function() {
                    return {
                        name: 'max'
                    }
                }
            }
        }
```
