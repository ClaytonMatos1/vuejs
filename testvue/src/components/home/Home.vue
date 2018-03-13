<template>
    <div>
        <div class="page-header">
            <h1 class="center">{{ title }}</h1>
        </div>
        <p class="center" v-show="mensagem">{{ mensagem }}</p>
        <input type="search" class="form-control" @input="filter = $event.target.value" placeholder="Filtre por parte do título" name="search">
        <div class="row">
            <div class="col-sm-6 col-md-4" v-for="image of imagesFilter">
                <meu-painel :titulo="image.titulo" :url="image.url" :descricao="image.descricao || 'Sem descricao'">
                    <p><router-link :to="{ name : 'update', params : { id : image._id } }"><botao-personalizado label="Alterar" type="button" class="button" /></router-link> <botao-personalizado label="Remover" type="button" class="btn" styleButton="danger" :confirmation="true" @clickButton="remove(image)" /></p>
                </meu-painel>
            </div>
        </div>
    </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import Button from "../shared/button/Button.vue";
import ImageService from "../../domain/image/ImageService";

export default {
    components : {
        'meu-painel' : Painel,
        'botao-personalizado' : Button
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

    .form-control {
        margin-bottom: 15px;
    }
</style>
