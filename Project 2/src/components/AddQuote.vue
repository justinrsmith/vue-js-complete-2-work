<template>
    <div class="row mb-5">
        <div class="col-4 offset-4 text-center">
            <textarea class="form-control mb-2" cols="30" rows="5" v-model="quote">
            </textarea>
            <button class="btn btn-primary" @click="submitQuote()">Add Quote</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                'quote': ''
            };
        },
        methods: {
            submitQuote() {
                this.$emit('quoteWasAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>
