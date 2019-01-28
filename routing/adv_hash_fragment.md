# Passing the hash fragment
Når du vil naviger til en bestemt del af siden med # og anchor.  

##### UserEdit.vue
```
<p id="data">Some extra data</p> <!-- Til # og anchor -->
```
Giv # fragmentet med i routen.  
##### UserDetail.vue
```
<router-link 
    tag="button" 
    :to="link"
    class="btn btn-primary">Edit User</router-link>

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
        }
    }
</script>
```
Den scroller ikke. Se control_scroll.  
