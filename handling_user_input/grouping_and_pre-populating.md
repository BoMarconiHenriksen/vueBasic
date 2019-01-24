# Grouping and pre-populating inputs
Grouping input i et objekt.  
```
<div class="form-group">
    <label for="email">Mail</label>
    <input
        type="text"
        id="email"
        class="form-control"
        v-model="userData.email">
</div>
<div class="form-group">
    <label for="password">Password</label>
    <input
        type="password"
        id="password"
        class="form-control"
        v-model="userData.password">
</div>
    <div class="form-group">
    <label for="age">Age</label>
        <input
            type="number"
            id="age"
            class="form-control"
            v-model="userData.age">
</div>

<p>Mail: {{ userData.email }}</p>
<p>Password: {{ userData.password }}</p>
<p>Age: {{ userData.age}}</p>

export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                } 
            }
        }
    }
```
