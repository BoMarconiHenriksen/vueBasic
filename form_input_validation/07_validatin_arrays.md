# Validating arrays


```
<div class="hobbies">
    <h3>Add some Hobbies</h3>
    <button @click="onAddHobby" type="button">Add Hobby</button>
    <div class="hobby-list">
        <div
            class="input"
            v-for="(hobbyInput, index) in hobbyInputs"
            :class="{invalid: $v.hobbyInputs.$each[index].$error}"
            :key="hobbyInput.id">
        <label :for="hobbyInput.id">Hobby #{{ index }}</label>
        <input
            type="text"
            :id="hobbyInput.id"
            @blur="$v.hobbyInputs.$each[index].value.$touch()"
            v-model="hobbyInput.value">
        <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
        </div>
        <p v-if="!$v.hobbyInputs.minLen">You have to specify at least {{ $v.hobbyInputs.params.minLen.min }} hobbies.</p>
        <p v-if="!$v.hobbyInputs.required">Please add hobbies.</p>
    </div>
</div>

hobbyInputs: {
    required, 
    minLen: minLength(1), /* virker ikke. Se dokumentation. */
    $each: { /* placeholder for alle the dynamic elements we can add to the array. */
        value: { /* value kommer fra onAddHobby metoden. */
            required,
            minLen: minLength(5) /* minimum antal karakterer. */
        }
    } 
    } 
},
```
