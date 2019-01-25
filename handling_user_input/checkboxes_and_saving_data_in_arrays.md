# Useing checkboxes and saving data in arrays
Vigtigt at de bliver bindet til en specifik property.  
Tilføjer de valgt checkboxe til et array.  
v-model skal tilføjes til input taget, og IKKE til label eller div taget.  
Bind flere input(checkboxe) til samme property.  
```
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
            <label for="sendmail">
                <input
                    type="checkbox"
                    id="sendmail"
                    value="SendMail"
                    v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
                <input
                    type="checkbox"
                    id="sendInfomail"
                    value="SendInfoMail"
                    v-model="sendMail"> Send Infomail
            </label>
        </div>

    </div>
</div>

<ul>
    <li v-for="item in sendMail">{{ item }}</li>
</ul>

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
        }
    }
}
```
