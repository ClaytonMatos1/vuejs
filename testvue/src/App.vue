<template>
    <div class="principal">
        <meu-menu :routes="routes"></meu-menu>

        <transition name="page-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';
export default {
    components : {
        'meu-menu' : Menu
    },
    data() {
        return {
            routes
        }
    }
}
</script>

<style>
    .principal {
        font-family: Helvetica, sans-serif;
        width: 100%;
        margin: 0 auto;
    }

    .page-fade-enter, .page-fade-leave-active {
        opacity: 0;
    }

    .page-fade-enter-active, .page-fade-leave-active {
        transition: opacity .2s;
    }
</style>
