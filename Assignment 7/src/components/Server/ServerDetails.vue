<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="selectedServer">
            The status for server #{{ selectedServer.id }} is {{ selectedServer.status }}
            <button @click="changeStatus">Set Status to Normal</button>
        </div>
        <p>Please select a server</p>{{selectedServer}}
    </div>

</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function() {
            return {
                selectedServer: null
            }
        },
        methods: {
            changeStatus() {
                this.selectedServer.status = 'Normal'
            }
        },
        created() {
            eventBus.$on('serverWasSelected', (data) => {
                this.selectedServer = data
            });
        }
    }
</script>

<style>

</style>
