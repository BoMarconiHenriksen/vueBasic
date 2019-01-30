# Controlling the form submit button
Hvis der er validation error i formen, så kan den ikke submittes.  

```
<div class="submit">
    <button type="submit" :disabled="$v.$invalid">Submit</button>
</div>
```
