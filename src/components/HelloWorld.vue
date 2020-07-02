<template>
    <div class="hello">
        <!--call once-->
        <h1 v-once>{{ msg }}</h1>
        <a v-bind:href="link"> Google</a>

        <h1>{{ sayHello() }}</h1>
    </div>
</template>

<script>
    export default {
        name   : 'HelloWorld',
        data   : function () {
            return {
                link: "http://google.com"
            };
        },
        methods: {
            sayHello: function () {
                this.msg = "changed msg"
                return this.msg;
            },
        },
        props  : {
            msg: String
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
