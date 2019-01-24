# A basic input form binding
Brug v-model til at binde en property til et input felt.  
Vuejs finder ud af, hvilken vej dataene ændres.  
```
<div class="form-group">
    <label for="email">Mail</label>
        <input
            type="text"
            id="email"
            class="form-control"
            v-model="email">
</div>

export default {
    data() {
        return {
            email: ''
        }
    }
}
```
