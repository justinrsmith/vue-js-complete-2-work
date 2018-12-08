<template>
    <div class="row mb-3">
        <div class="col">
             <h2>
                <slot></slot>
            </h2>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{ width: numQuotes * maxQuotes + '%' }">
                    {{ numQuotes }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['numQuotes', 'maxQuotes']
    }
</script>
