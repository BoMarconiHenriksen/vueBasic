<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
            ])
            /* action gør det her. Vi behøver ikke at skrive det her. */
            //increment(by) { /* Kan give et parameter med. */
            //    this.$store.dispatch('increment', by);
            //}

            
        }
    }
</script>