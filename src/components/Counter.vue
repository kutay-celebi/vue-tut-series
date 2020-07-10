<template>
    <div>
        <button @click="incrementAction"> Increase</button>
        <button @click="decrement"> Decrease</button>

        <div>
            {{ doubleCounter }}
        </div>
    </div>
</template>

<script>
    import {mapGetters}  from "vuex";

    export default {
        name    : "Counter",
        methods : {
            incrementAction: function () {
                this.$store.dispatch("counter/incrementAction")
            },
            decrement: function () {
                this.$store.dispatch("counter/decrementAction")
            }
        },
        computed: {
            ...mapGetters("counter", [
                "doubleCounter"
            ])
        }
    }
</script>

<style scoped>

</style>