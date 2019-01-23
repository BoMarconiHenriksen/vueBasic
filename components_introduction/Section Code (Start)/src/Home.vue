<template>
    <div>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>
    
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
