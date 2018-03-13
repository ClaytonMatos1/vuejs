<template>
    <div class="container">
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
            routes : routes.filter(route => route.menu)
        }
    }
}
</script>

<style>
    .page-fade-enter, .page-fade-leave-active {
        opacity: 0;
    }

    .page-fade-enter-active, .page-fade-leave-active {
        transition: opacity .2s;
    }
</style>
