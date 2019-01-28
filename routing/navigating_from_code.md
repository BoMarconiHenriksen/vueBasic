# Navigating from code (imperativ navigation)
Hvis du vil trigger et link når noget kode er kørt.  
```
this.$router.push('/'); /* Pusher det på stacks af de eksisterende routes. Gør at frem og tilbage virker. */  
```
Kan også tage et objekt.  
```
this.$router.push({path: '/'});
```
##### User.vue
```
<template>
<div>
    <h1>The User Page</h1>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
</div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/'); /* Pusher det på stacks af de eksisterende routes. Gør at frem og tilbage virker. */
            }
        }
    }
</script>
```
