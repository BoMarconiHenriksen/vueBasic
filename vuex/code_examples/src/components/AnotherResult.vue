<template>
<div>
     <p>Counter is: {{ doubleCounter }}</p>
     <p>Number of clicks: {{ stringCounter }}</p>
</div>
   
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: { 
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
        ]),
        ourOwnComputed() {
            
        }
    }
        /* 
        computed: mapGetters({
            propertyName: 'doubleCounter',
            propertyName: 'stringCounter',
        })
        */
    }
</script>
