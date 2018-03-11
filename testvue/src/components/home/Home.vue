<template>
    <div>
        <h1 class="center">{{ title }}</h1>
        <p class="center" v-show="mensagem">{{ mensagem }}</p>
        <input type="search" class="filter" @input="filter = $event.target.value" placeholder="Filtre por parte do título" name="search">
        <ul class="list-images">
            <li class="list-images-item" v-for="image of imagesFilter">
                <meu-painel :image="image.titulo">
                    <image-responsive :url="image.url" :title="image.title" v-meu-transform:scale.animate="1.2" />
                    <router-link :to="{ name : 'update', params : { id : image._id } }"><botao-personalizado label="Alterar" type="button" class="button" /></router-link>
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
import ImageService from "../../domain/image/ImageService";

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
            filter : '',
            mensagem : ''
        }
    },

    methods : {
        remove(image) {
            this.service.delete(image._id)
                .then(() => {
                    let index = this.images.indexOf(image);
                    this.images.splice(index, 1);
                    this.mensagem = 'Foto removida com sucesso!'
                }, err => this.mensagem = err.message);
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
        this.service = new ImageService(this.$resource);

        this.service
            .list()
            .then(images => this.images = images, err => this.mensagem = err.message );
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
