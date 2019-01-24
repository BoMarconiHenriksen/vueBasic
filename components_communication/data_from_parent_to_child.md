# Data from parent to child
### Data from parent ti child
Brug props (Properties set from the outside).  

##### I child
I child tilføj props til export default objektet.  
props er et array, hvor hver string i arrayet kan sættes udefra(fra parent).  
Det navn, der gives skal passe til den property i templaten.  
props kan tilgås fra template, og bruges i vue instancens metoder med this.name.  
```
<p>User Name: {{ name }}</p>

export default {
        props: ['name']
    }
```
##### I parent
I template hvor child komponenten kaldes. Brug v-bind: eller sorthand. Referer til name property i data.  
name skal være det samme som i props.  
```
<app-user-detail :name="name"></app-user-detail>  

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Max' /* Default name */
            };
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
```
