# Radio Buttons
Husk det kun er muligt at vælge en radio button.  
Bind alle input tags med v-model til samme property.  
Ved at binde til samme property ved vuejs at de tilhører samme gruppe. Det betyder at det kun er muligt at vælge en.  
Vuejs gemmer automatisk værdien af den valgt radio button(male eller female)
```
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <label for="male">
            <input
                type="radio"
                id="male"
                value="Male"
                v-model="gender"> Male
        </label>
        <label for="female">
            <input
                type="radio"
                id="female"
                value="Female"
                v-model="gender"> Female
        </label>
    </div>
</div>

<p>Gender: {{ gender }}</p>

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                age: 27
            },
            message: 'A new Text',  /* Default text. */
            sendMail: [], /* Til checkboxe. */
            gender: 'Male', /* Til radio buttons. Male er default. */
        }
    }
}
```
