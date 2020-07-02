<template>
    <div class="bordereddiv">
        <!--call once-->
        <h1 v-once>{{ msg }}</h1>
        <a :href="link"> Google</a>

        <h1>{{ sayHello() }}</h1>

        <p v-html="createLink()"/>
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
            sayHello  : function () {
                this.msg = "changed msg"
                return this.msg;
            },
            createLink: function () {
                return '<a href="http://facebook.com">facebook</a> '
            }
        },
        props  : {
            msg: String
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bordereddiv{
        padding:1.25rem;
        margin: 1.25rem;
        border: 1px solid blue;
    }

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
