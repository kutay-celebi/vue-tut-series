<template>
    <div class="bordereddiv">
        <h2>Slot ex.</h2>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "SlotComponent"
    }
</script>

<style scoped>
    .bordereddiv {
        padding: 1.25rem;
        margin: 1.25rem;
        border: 1px solid black;
    }

</style>