<template>
    <button :class="classButton" :role="type" @click="propagation()">{{ label }}</button>
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
                if (this.styleButton == 'danger') return 'btn-danger';
                return 'btn-primary';
            }
        }
    }
</script>

<style scoped>
    @import './button.css';
</style>