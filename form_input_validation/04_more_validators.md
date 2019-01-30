# More validators
Tjek på age.  
Brug numeric validator(tjekker at værdien er et nummer) og minValue(tjekker at en værdi er højere end en anden.)  
$touch() når der skal valideres.  
For at tjekke, hvilke værdier du har adgang til $v.  

```
<div class="input" :class="{invalid: $v.age.$error}">
    <label for="age">Your Age</label>
    <input
        type="number"
        id="age"
        @blur="$v.age.$touch()" 
        v-model.number="age">
        <p v-if="!$v.age.minVal">You have to be at least {{ $v.age.$params.minVal.min }} years old.</p>
</div>

import { required, email, numeric, minValue } from 'vuelidate/lib/validators'

validations: {
    email: {
        required, // required: required,
        email, // email: email
    },
    age: { /* Da property i data er age skal den også være age her. */
        required,
        numeric,
        minVal: minValue(18) /* minValue er en funktion, der tager den mindste værdi, der skal tjekkes for. */
    } 
},
```
