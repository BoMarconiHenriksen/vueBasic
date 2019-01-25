# Create a custom control(input)
Til en input komponent skal vi have en prop property med værdien, så vi kan give værdien til komponenten.  
Og den skal emit en event, der hedder input. Så v-model kan reager på det.   

Binder og passer dataSwitch til komponenten ```<app-switch v-model="dataSwitch"></app-switch>```  

Sæt value prop og emit event i komponenten.  

##### App.vue
```
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-switch v-model="dataSwitch"></app-switch>
    </div>
</div>

<p>Switched: {{ dataSwitch }}</p>

<script>
    import Switch from './Switch.vue';

    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                dataSwitch: true,   /* Til input komponenten. */
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>
```
##### Switch
```
<template>
    <div>
        <div
                id="on"
                @click="switched(true)"
                :class="{active: value}">On</div>
        <div
                id="off"
                @click="switched(false)"
                :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            switched(isOn) {
                this.$emit('input', isOn)
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>
```
