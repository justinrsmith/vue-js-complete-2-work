<template>
    <div class="form-group">
        <label for="">Full Name</label>
        <input class="form-control" @input="updateValue" type="text">
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            updateValue(val) {
                this.$emit('input', val.target.value)
            }
        } 
    }
</script>
