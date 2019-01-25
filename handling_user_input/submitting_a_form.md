# Submitting a form
Vi bruger her prevent for at undgå at sende det til en server, da det er default når du submitter en form.   

```
<button
    class="btn btn-primary"
    @click.prevent="submitted">Submit!
</button>

<div class="row" v-if="isSubmitted"> <!-- Til at vise det som er submitted. -->

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                age: 27
            },
            isSubmitted: false, /* Til submit buttun. */
        }
    },
    methods: {
        submitted() {
            this.isSubmitted = true;
        }
    },
}
```
