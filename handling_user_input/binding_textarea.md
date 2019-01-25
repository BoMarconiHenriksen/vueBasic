# Binding textarea and saving line
Interpolation between <textarea>{{ test }}</textarea> doesn't work!  
Brug v-model i stedet for.  
Gemmes default som multiline string.  
Hvis det skal outputtes som multiline skriv: ```<p style="white-space: pre">Message: {{ message }}</p>```
```
<textarea
    id="message"
    rows="5"
    class="form-control"
    v-model="message">
</textarea>

<p>Message: {{ message }}</p>

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                age: 27
            },
            message: 'A new Text'  /* Default text. */
        }
    }
}
```
