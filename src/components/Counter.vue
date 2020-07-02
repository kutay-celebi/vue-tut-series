<template>
    <div class="borderdiv">
        <button v-on:click="increase(2)">Click</button>
        <button v-on:click="counter++">Click</button>
        <span>{{this.counter}}  -  </span>
        <span>{{ this.counter > 10 ? "> 10 " : "10>"}}</span>
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
    .borderdiv {
        padding:1.25rem;
        margin: 1.25rem;
        border: 1px solid green;
    }
</style>