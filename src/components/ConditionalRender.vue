<template>
    <div class="bordereddiv">
        <input v-if="show"/>
        <p v-else>Hidden input</p>
        <p >V show</p>
        <template v-if="show">
            <p>
                Inside template
            </p>
        </template>
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
    .bordereddiv {
        padding: 1.25rem;
        margin: 1.25rem;
        border: 1px solid red;
    }

</style>