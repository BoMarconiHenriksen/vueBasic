# Modifying user input with input modifiers
v-model reager på input eventet dvs den opdater når input ændres.  
En modifier kan bruges til at ændre så der kun opdateres efter 
.lazy gør at der ikke lyttes efter input event, nu lytter den til change event dvs. den opdater når vi forlader input feltet.  
.trim fjerner whitespace i starten og slutningen.  
.number sikre at det som skrives er et nummer(default er string).  
```
v-model.lazy="userData.password"

v-model.number="userData.age"
```
