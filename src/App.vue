<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
    <Counter/>
    <TwoWayBind/>
    <ConditionalRender/>
  </div>
</template>

<script>
import HelloWorld        from './components/HelloWorld.vue'
import Counter           from "@/components/Counter";
import TwoWayBind        from "@/components/TwoWayBind";
import ConditionalRender from "@/components/ConditionalRender";

export default {
  name: 'App',
  components: {
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
