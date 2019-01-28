# Reacting to changes in route parameters
Id'et skal opdateres.  
Da komponenten ikke bliver recreated kan der opstå et problem, hvis f.eks. id'et i routen skal ændres.  
Vi skal derfor se efter ændringer i route params så vi kan ændre dem, hvis det bliver nødvendigt.  
```
<template>
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
        watch: {
            '$route'(to, from) { /* Hvor kommer vi fra, og hvor skal vi hen. */
                this.id = to.params.id; /* Den nye param ligger på to. to er en route. */
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

Det er muligt at bruge props istedet for watching. Se https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js  
