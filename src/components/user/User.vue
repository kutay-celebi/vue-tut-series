<template>
    <div>
        <button @click="goHome"> Go home</button>
        User Path

        <p>
            Parameter : {{ id }}
        </p>

        <router-view/>
    </div>
</template>

<script>
    import {router} from "../../main";

    export default {
        name   : "User.vue",
        data   : function () {
            return {
                id: this.$route.params.id
            }
        },
        methods: {
            goHome() {
                console.log(router)
                console.log(this.$router)
                // this.$router.push("/")
                router.push("/")
            }
        },
        watch: {
            $route(to,from){
                this.id = to.params.id;
                console.log(from)
            }
        }
    }
</script>

<style scoped>

</style>