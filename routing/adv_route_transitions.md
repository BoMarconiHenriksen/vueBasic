# Animation route transition
Animate når du går fra en route til en anden.  
Brug transition.  
##### Wrap det router-view med transition.
mode="out-in" den gamle komponent fjernes før den ny tilføjes.  

##### App.js
```
<transition name="slide" mode="out-in"> <!-- Til animation når der skiftes mellem routes. OBS kun 1 element. -->
    <router-view></router-view> 
</transition>

<style>
    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
```
