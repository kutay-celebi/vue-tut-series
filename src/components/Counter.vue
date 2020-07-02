<template>
    <div class="borderdiv">
        <button v-on:click="increase(2)">Click</button>
        <span>{{this.counter}}  -  {{output}} </span>

    </div>
</template>

<script>
    export default {
        name     : "Counter",
        // sadece onu ilgilendiren variable ile ilgili degisiklik olursa calisir.
        computed : {
            output: (props) => {
                return props.counter > 10 ? "Greater than 10" : "Smaller than 10";
            }
        },
        methods  : {
            increase: function (improve) {
                this.counter = this.counter + improve;
            }
        },
        props    : {
            counter: {
                type: Number,
                default: 1
            }
        }
    }
</script>

<style scoped>
    .borderdiv {
        padding: 1.25rem;
        margin: 1.25rem;
        border: 1px solid green;
    }
</style>