<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ changeName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name with restFn()</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        props: {
            name: {
                type: String
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            changeName() {
                return this.name.split("").reverse().join(""); /* Reverse the name. */
            },
            resetName: function() {
                this.name = 'max'; /* Til en start ændre det kun navnet i child komponenten. */
                this.$emit('nameWasReset', this.name); /* Fyrer en event af, der giver det nye name med. */
            }
        },
        /* Bruges til eventBus. */
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
