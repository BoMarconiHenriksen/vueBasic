<template>
    <div class="container">
        <app-header></app-header>
        <app-servers></app-servers>
        <app-detailsServer></app-detailsServer>
        <app-mamagedServers></app-mamagedServers>
    </div>
    
</template>

<script>
import Header from './components/Header.vue';
import ManagedServers from './components/ManagedServers.vue';
import DetailsServer from './components/DetailsServer.vue';
import Servers from './components/Servers.vue';

export default {
    components: {
        'app-header': Header,
        'app-mamagedServers': ManagedServers,
        'app-detailsServer': DetailsServer,
        'app-servers': Servers
    }
}
</script>

<style>

</style>
