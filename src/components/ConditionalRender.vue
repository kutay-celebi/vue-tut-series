<template>
    <div>
        <input v-if="show"/>
        <p v-else>Hidden input</p>
        <button @click="changeRender">Switch</button>
    </div>
</template>

<script>
    export default {
        name   : "ConditionalRender",
        props  : {
            show: {
                type   : Boolean,
                default: true
            }
        },
        methods: {
            changeRender: function () {
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>

</style>