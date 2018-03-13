<template>
    <div class="thumbnail">
        <image-responsive :url="url" :title="titulo" v-meu-transform:scale.animate="1.2" />
        <div class="caption">
            <h3>{{ titulo }}</h3>
            <p>{{ descricao }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ImageResponsive from "../image-responsive/ImageResponsive.vue";
import transform from "../../../directives/Transform";

export default {
    props : ['titulo', 'url', 'descricao'],

    components : {
        'image-responsive' : ImageResponsive
    },

    directives : {
        'meu-transform' : transform
    },

    data() {
        return {
            visible : true
        }
    }
}
</script>

<style scoped>
    .thumbnail {
        overflow: hidden;
    }
    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s;
    }
</style>
