<template>
    <div id="app">
        <form>
            <div class="grid grid-cols-2">
                <label for="email"> Email</label>
                <input id="email" v-model="email"/>

                <label for="personName"> Name</label>
                <input id="personName" v-model="person.name"/>

                <label for="lazy"> Lazy</label>
                <input id="lazy" v-model.lazy="lazy"/>

                <label for="checkbox1">Checkbox1</label>
                <input id="checkbox1" type="checkbox" v-model="checkbox" value="Checkbox 1"/>

                <label for="checkbox2"> Checkbox2</label>
                <input id="checkbox2" type="checkbox" v-model="checkbox" value="Checkbox 2"/>

                <label for="dropdown"> Dropdown</label>
                <select id="dropdown" v-model="selected">
                    <option v-for="item in ditems" :key="item" :selected="item">{{item}}</option>
                </select>

                <label for="custom"> Custom Input</label>
                <input id="custom" :value="custom" @input="custom = $event.target.value"/>

                <CustomSwitch v-model="dataSwitch"/>


                <div class="my-5">
                    <button @click.prevent="onsubmit">
                        Submit
                    </button>
                </div>
            </div>
        </form>

        <div v-if="isSubmitted">
            <div class="formOutput grid grid-cols-2">
                Email : {{this.email}}
                Name : {{this.person.name}}
                Lazy : {{this.lazy}}
            </div>
            <h2>Checkboxes</h2>

            <ul>
                <li v-for="check in checkbox" :key="check"> {{check}}</li>
            </ul>

            <h2>Dropdown selected</h2>
            <span> {{selected}}</span>

            <div class="formOutput grid grid-cols-2">
                Custom : {{this.custom}}
                Switched : {{this.dataSwitch}}
            </div>
        </div>

        <div>
            {{filterText | toUppercase}}
        </div>


        <transition name="slide" type="out-in">
            <router-view/>
        </transition>

        <router-view name="namedRoute"/>

    </div>
</template>

<script>

    import CustomSwitch from "./components/CustomSwitch";

    export default {
        name      : 'App',
        components: {CustomSwitch},
        data      : function () {
            return {
                email        : '',
                lazy         : '',
                person       : {
                    surname: ''
                },
                checkbox     : [],
                ditems       : [
                    "Item 1",
                    "Item 2",
                    "Item 3",
                ],
                selected     : '',
                custom       : '',
                dataSwitch   : false,
                isSubmitted  : false,
                filterText   : "filter message",
                computedArray: ["a", "b", "c"]
            }
        },
        methods   : {
            onsubmit() {
                this.isSubmitted = true
            }
        },
        filters   : {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed  : {
            computedVariable(computedVar) {
                return computedVar;
            }
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

    form {
        display: flex;
        flex: 1;
        flex-direction: row;
    }

    .formOutput {
        border: 1px solid;
        margin: 1.25rem;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }

    }

    @keyframes slide-in {

        0% {
            transform: translateY(-40px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
