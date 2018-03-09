<template>
    <button :class="classButton" :type="type" @click="propagation()">{{ label }}</button>
</template>

<script>
    export default {
        props : {
            type : {
                required : true,
                type : String
            },
            label :{
                required : true,
                type : String
            },
            confirmation : {
                required : false,
                default : false,
                type : Boolean
            },
            styleButton : {
                required : false,
                default : 'default',
                type : String
            }
        },
        methods : {
            propagation() {
                if (this.confirmation) {
                    if (confirm('Confirma operação?')) this.$emit('clickButton');
                    return;
                }
                this.$emit('clickButton');
            }
        },
        computed : {
            classButton() {
                if (this.styleButton == 'danger') return 'button-danger';
                return 'button-default';
            }
        }
    }
</script>

<style scoped>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
        cursor: pointer;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }
</style>