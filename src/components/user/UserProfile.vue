<template>
    <div>
        <p>
            {{ id }} user profile.

            Query : {{query}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        data: function () {
            return {
                id: this.$route.params.id,
                query: this.$route.query.name
            }
        },
        watch: {
            $route(to){
                this.id= to.params.id
            }
        }
    }
</script>

<style scoped>

</style>