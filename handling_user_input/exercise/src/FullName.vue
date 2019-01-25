<template>
    <div class="form-group">
        <label for="name">Full Name</label>
            <input
                type="text"
                id="name"
                class="form-control"
                @input="nameChanged($event)">
    </div>

</template>

<script>
    export default {
        props: ['value'],
        methods: {
            nameChanged(event) {
                name = event.target.value;
                this.value = name;
                this.$emit('input', value);
            }
        }
    }

</script>

<style>

</style>
