<template>
    <div class="col-3">
        <li class="list-group-item mb-4">
            <slot></slot>
        </li>
    </div>
</template>

<script>
</script>

<style scoped>
    li {
        cursor: pointer;
    }
    li:hover {
        background-color: red;
    }
</style>
