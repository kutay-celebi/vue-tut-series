<template>
    <div>
        <button v-on:click="increase()">Click</button>
        <span>{{this.counter}}</span>
    </div>
</template>

<script>
    export default {
        name   : "Counter",
        data   : function () {
            return {
                counter: 0
            };
        },
        methods: {
            increase: function () {
                this.counter++
            }
        }
    }
</script>

<style scoped>

</style>