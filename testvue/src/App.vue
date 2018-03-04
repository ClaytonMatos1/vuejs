<template>
    <div class="principal">
        <h1 class="center">{{ title }}</h1>
        <ul class="list-images">
            <li class="list-images-item" v-for="image of images">
                <meu-painel :image="image.titulo">
                    <img class="image-responsive" :src="image.url" :alt="image.title">
                </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";
export default {
    components : {
        'meu-painel' : Painel
    },

    data(){
        return {
            title : 'Fotos',
            images : []
        }
    },

    created() {
        this.$http.get('//localhost:3000/v1/fotos')
            .then(res => res.json())
            .then(images => this.images = images, err => console.log(err));
    }
}
</script>

<style>
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: 0 auto;
    }

    .center {
        text-align: center;
    }

    .list-images {
        list-style: none;
    }

    .list-images .list-images-item {
        display: inline-block;
    }

    .image-responsive {
        width: 100%;
    }
</style>
