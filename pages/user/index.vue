<template>
  <div>
    User Index
    <button @click="goDetail"> Go detail </button>
  </div>
</template>

<script>
  export default {
    name: "index.vue",
    methods: {
      goDetail() {
        this.$router.push("/user/5")
      }
    },
  }
</script>

<!--<style scoped>-->

<!--</style>-->
