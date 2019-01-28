<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- <router-link 
            tag="button" 
            :to="'/user' + $route.params.id + '/edit'"
            class="btn btn-primary">Edit User</router-link> --> <!-- to="/user" hvor button tager dig til. Bind og parse en string med id. -->
    
            <router-link 
            tag="button" 
            :to="link"
            class="btn btn-primary">Edit User</router-link> <!-- A better way of creating links with named routes -->

    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit', 
                    params: { 
                        id: this.$route.params.id /* this. fordi vi nu er i vue instance. */
                    }, query: { 
                        locale: 'en', 
                        q: 100 
                    },
                    hash: '#data', /* Nu får vi #data med i urlen, men den scroller ikke ned. */
                } 
            }
        },
        beforeRouteEnter(to, from, next) { /* livecycle hook. */
            if(true) { /* Authenticate brugeren her. */
                next();
            } else {
                next(false);
            }
            /* Da komponenten ikke er lavet har vi ikke adgang til this.link. */
            //next(vm => { /* Kalder komponenten. Tager en callback. vm = view model */
            //    vm.link; /* Bliver udført når komponenten er loadet, og derfor har vi nu adgang til link. */
            //}); 
        }
    }
</script>
