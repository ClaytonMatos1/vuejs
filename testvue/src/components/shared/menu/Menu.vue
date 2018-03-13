<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <router-link v-for="route in routes" class="navbar-brand" :to="route.path ? route.path : '/'" :title="route.title">{{ route.title }}</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    props : {
        routes : {
            type : Array,
            required : true
        }
    }
}
</script>