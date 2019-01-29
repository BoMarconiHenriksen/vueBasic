# Adding a validator
Det er vigtigt at property i validations er det samme som der bindes med v-model.  
Det gør at vuelidate kan synkronizer og ved hvornår værdien ændres.  
$v for at få fat i vuelidate metoderne.  
##### signup.vue
```
import { required, email } from 'vuelidate/lib/validators'

validations: {
    email: {
    required, 
    email, 
    }
}

<div class="input">
    <label for="email">Mail</label>
    <input
        type="email"
        id="email"
        @input="$v.email.$touce()"
        v-model="email">
        <div>{{ $v }}</div>
</div>
```
