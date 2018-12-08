<template>
    <li @click="selectServer" class="list-group-item">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: ['server'],
        methods: {
            selectServer() {
                eventBus.$emit('serverWasSelected', this.server);
            } 
        }
    }
</script>
