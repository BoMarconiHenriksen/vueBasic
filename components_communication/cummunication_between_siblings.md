# Cummunication between siblings components
Der er 3 måder at gøre det på.  

#### Custom Events
##### User
```
<app-user-detail :userAge="age"></app-user-detail>

<app-user-edit 
    :userAge="age"
    @ageWasEdited="age = $event"></app-user-edit>

data: function() {
    return {
        name: 'Max', /* Default name */
        age: 27 /* Default age */
    };
}
```
##### UserDetail
```
props: {
    userAge: Number
}
```

##### UserEdit
```
<p>User Age: {{ userAge }}</p>
<button @click="editAge">Edit Age</button>

export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            this.$emit('ageWasEdited', this.userAge) /* Laver en event og sender userAge tilbage til parent. */
        }
    }
}
```

#### Kan også laves med callbacks.  

#### Eller med en event bus



