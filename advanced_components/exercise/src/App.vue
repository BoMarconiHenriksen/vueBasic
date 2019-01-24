<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button 
                    class="btn btn-primary" 
                    @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button 
                    class="btn btn-success"
                    @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button 
                    class="btn btn-danger"
                    @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>

                <!-- slot exercise -->
                <!-- <app-blue>
                    <h1>Blue Content</h1>
                    <p>The is only blue content!</p>
                </app-blue>
                <app-green>
                    <h1>Green content</h1>
                    <p>This is only green content!</p>
                </app-green>
                <app-red>
                    <h1>Red content</h1>
                    <p>This is only red content!</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
