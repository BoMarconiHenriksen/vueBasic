<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>

                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info.</div>
                </transition>

                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some info.</div>
                </transition>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true

            }
        }
    }
</script>

<style>
    .fade-enter { /* fade kommer fra name="fade" i transition taget. */
        opacity: 0;/* Kun for en frame i starten */
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity: 1s; Er sat.*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
</style>
