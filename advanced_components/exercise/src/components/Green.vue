<template>
    <div>
        <slot></slot>
        
    </div>
</template>

<script>
export default {
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

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>