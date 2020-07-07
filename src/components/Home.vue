<template>
    <div>
        <router-link to="/user">User</router-link>
        <button @click="goUser1">
            Go User 1
        </button>
        <button @click="goUserQuery">
            Go User Query
        </button>
        Home Route
    </div>
</template>

<script>
    export default {
        name   : "Home.vue",
        methods: {
            goUser1() {
                this.$router.push({name: "userProfile", params: {id: "5"}})
            },
            goUserQuery() {
                this.$router.push({name: "userProfile",params: {id: "5"}, query: {name: "Kutay"}})
            }
        }
    }
</script>

<style scoped>

</style>