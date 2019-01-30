# Validation passwords 

```
<div class="input" :class="{invalid: $v.password.$error}">
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        @blur="$v.password.$touch()"
        v-model="password">
</div>
<div class="input" :class="{invalid: $v.confirmPassword.$error}">
    <label for="confirm-password">Confirm Password</label>
    <input
        type="password"
        id="confirm-password"
        @blur="$v.confirmPassword.$touch()"
        v-model="confirmPassword">
</div>

password: {
    required,
    minLen: minLength(6)

    },
    confirmPassword: {
        // sameAs: sameAs('password') /* property name fra vue instancen. Mulighed 1 */
        sameAs: sameAs(vm => { /* Brug denne her mulighed, hvis du vil tjekke for flere ting. */
          return vm.password; /* Returner den property du vil sammenligne. */
        }) /* Giv det en funktion. */
    } 
},
```
