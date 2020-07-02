<template>
    <div class="borderdiv">
        <input type="text" v-model="name" v-on:change="logChange()"/>
    </div>
</template>

<script>
    export default {
        name   : "TwoWayBind",
        data   : function () {
            return {
                name: "kutay"
            }
        },
        methods: {
            logChange: function () {
                console.log(this.name)
            }
        }
    }
</script>

<style scoped>
    .borderdiv {
        padding:1.25rem;
        margin: 1.25rem;
        border: 1px solid orangered;
    }
</style>