<template>
    <div>
        <button v-on:click="increase(2)">Click</button>
        <button v-on:click="counter++">Click</button>
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
            increase: function (improve) {
                this.counter = this.counter + improve;
            }
        }
    }
</script>

<style scoped>

</style>