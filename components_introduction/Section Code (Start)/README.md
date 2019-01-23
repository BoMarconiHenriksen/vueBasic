# Komponenter Intro
##### template
Der må ikke være flere root elements dvs. alle elementer skal være i en div.  

##### data property i en komponent
data property i en komponent skal være en funktion.  

##### Importer komponent
En komponent kan importeres globalt i main.js, og bruges i f.eks. app.vue.  
```
Vue.component('app-servers', Home);  
```
Det er muligt at importer en komponent i script taget.  
```
<template>
    <app-server-status></app-server-status>
</template>

/* Loop through all servers. */
<script>
    import ServerStatus from './serverStatus.vue'
    export default {
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>
```
##### scoped
Det er muligt i style at bruge scope til at ændre css for kun den ene komponent.  
```
<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
```
