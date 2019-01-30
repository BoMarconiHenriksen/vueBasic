# Controlling styles for for invalid entries
@blur - når det ude af fokus dvs. du klikker uden for inputfeltet.  
$touch kaldes når du skal valider inputet.  
```
<div class="input" :class="{invalid: $v.email.$error}">
    <label for="email">Mail</label>
    <input
        type="email"
        id="email"
        @blur="$v.email.$touce()"
        v-model="email">
        <p v-if="!$v.email.email">Please provide a valid email address.</p>
        <p v-if="!$v.email.required">This field must not be empty.</p>
        // <div>{{ $v }}</div>
</div>
```
