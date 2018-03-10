<template>
    <div>
        <h1 class="center">{{ title }}</h1>
        <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre por parte do título" name="search">
        <ul class="list-images">
            <li class="list-images-item" v-for="image of imagesFilter">
                <meu-painel :image="image.titulo">
                    <image-responsive :url="image.url" :title="image.title" v-meu-transform:scale.animate="1.2" />
                    <botao-personalizado label="Remover" type="button" class="button" styleButton="danger" :confirmation="true" @clickButton="remove(image)" />
                </meu-painel>
            </li>
        </ul>
    </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImageResponsive from "../shared/image-responsive/ImageResponsive.vue";
import Button from "../shared/button/Button.vue";
import transform from "../../directives/Transform";
export default {
    components : {
        'meu-painel' : Painel,
        'image-responsive' : ImageResponsive,
        'botao-personalizado' : Button
    },

    directives : {
        'meu-transform' : transform
    },

    data(){
        return {
            title : 'Fotos',
            images : [],
            filter : ''
        }
    },

    methods : {
        remove(image) {
            alert('Removendo: ' + image.titulo);
        }
    },

    computed : {
        imagesFilter() {
            if (this.filter) {
                let exp = new RegExp(this.filter.trim(), 'i');
                return this.images.filter(image => exp.test(image.titulo))
            } else {
                return this.images;
            }
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
    .center {
        text-align: center;
    }

    .list-images {
        list-style: none;
    }

    .list-images .list-images-item {
        display: inline-block;
    }

    .filter {
        display: block;
        width: 80%;
        margin: 80px 0 0 80px;
    }
</style>
