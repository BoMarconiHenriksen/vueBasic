<template>
    <div>
        <h3>New Quote</h3>  
        <!-- To check if its a new instance or old instance. Answer: It's a new instance. -->
        <button @click="counter++">Increase</button>   
        <p>{{ counter }}</p>   
    </div>
</template>

<script>
    export default {
       data: function() {
           return {
               counter: 0
           }
       },
       /* Når vi er på vores komponent, og loader en anden komponent. */
       deactivated() {
           console.log('Deactivated');
       },
       /* Kaldes når vi loader den aktive komponent. */
       activated() {
           console.log('Activated');
       }
    }
</script>

<style>

</style>