<template>
<div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p> <!-- Extracting data fra a query. -->
    <p>Analytics: {{ $route.query.q  }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button> 

    <div style="height: 1200px"></div> <!-- Stimulere at vi skal scrolle. -->
    <p id="data">Some extra data</p> <!-- Til # og anchor -->

</div>
    
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteLeave(to, from, next) {
            /* Komponenten er lavet så vi har adgang til komponenten. */
            if(this.confirmed) {
                next();
            } else {
                if(confirm('Are you sure?')) { /* Forhindre hvis en bruger ved en fejl trykker på back button. */
                next();  
                } else {
                    next(false);
                }
            }
        }
    }
</script>