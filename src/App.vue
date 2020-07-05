<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Hello World"/>
        <Counter/>
        <TwoWayBind/>
        <ConditionalRender/>
        <SlotComponent>
            <p>slot component content</p>
            <sslot name="namedslot">
                <p>import named slot</p>
            </sslot>
        </SlotComponent>
    </div>
</template>

<script>
    import HelloWorld        from './components/HelloWorld.vue'
    import Counter           from "@/components/Counter";
    import TwoWayBind        from "@/components/TwoWayBind";
    import ConditionalRender from "@/components/ConditionalRender";
    import SlotComponent     from "./components/SlotComponent";

    export default {
        name      : 'App',
        components: {
            SlotComponent,
            ConditionalRender,
            TwoWayBind,
            HelloWorld,
            Counter,
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
