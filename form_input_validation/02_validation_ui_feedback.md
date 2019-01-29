# Adding validation UI feedback

```
<div class="input" :class="{ invalid: $v.email.$error }">
    <label for="email">Mail</label>
    <input
        type="email"
        id="email"
        @input="$v.email.$touce()"
        v-model="email">

        <p v-if="!$v.email.email">Please provide a valid email address.</p>
        <p v-if="!$v.email.required">This field must not be empty.</p>
</div>

.input.invalid label {
    color: red;  
}

.input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
}
```
