# What v-model does and how to create custom control
### v-model
``` v-model="userData.email"  ```
Gør 2 ting.  
1. Binder til valuen til en property eks. userData.email.  
2. Giver @input, der er default, (eller change) modifier. Der lytter til ændringer.
Det gør den med ```@input="userData.email = $event.target.value"``` behind the scene.  

Til en input komponent skal vi have en prop property med værdien, så vi kan give værdien til komponenten.  
Og den skal emit en event, der hedder input. Så v-model kan reager på det.   

Se create_custom_input_component.
