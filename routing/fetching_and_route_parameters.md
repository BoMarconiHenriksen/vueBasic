# Fetching and useing route parameters
Meget basic.  
I eksemplet kan man selv skrive id ind i urlen.  
```
template>
<div>
    <h1>The User Page</h1>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    
</div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id /* route er den aktive route.  */
            }
        },
        methods: {
            navigateToHome() {
                this.$router.push('/'); /* Pusher det på stacks af de eksisterende routes. Gør at frem og tilbage virker. */
            }
        }
    }
</script>
```
