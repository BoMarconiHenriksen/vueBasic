<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr>
    <router-view></router-view> <!-- Gør det muligt at loade subroutes. -->
    
</div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                /* this.$router.push('/'); */ /* Pusher det på stacks af de eksisterende routes. Gør at frem og tilbage virker. */
                /* this.$router.push( { path: '/' } ); */ /* en anden mulighed. */
                this.$router.push( { name: 'home' } ); /* en tredje mulighed. name: 'home' skal tilføjes i routes.js */
            }
        }
    }
</script>
