<template>
    <div>
        <h1 class="center">Cadastro</h1>
        <h2 class="center">{{ image.titulo }}</h2>

        <h2 class="center" v-if="image._id">Alterando</h2>
        <h2 class="center" v-else>Incluindo</h2>

        <form @submit.prevent="save()">
            <div class="control">
                <label for="titulo">TÍTULO</label>
                <input id="titulo" v-model.lazy="image.titulo" autocomplete="off">
            </div>

            <div class="control">
                <label for="url">URL</label>
                <input id="url" v-model.lazy="image.url" autocomplete="off">
                <image-responsive v-show="image.url" :url="image.url" :title="image.titulo" />
            </div>

            <div class="control">
                <label for="descricao">DESCRIÇÃO</label>
                <textarea id="descricao" v-model="image.descricao" autocomplete="off"></textarea>
            </div>

            <div class="center">
                <botao-personalizado label="GRAVAR" type="submit"/>
                <router-link :to="{ name : 'home' }"><botao-personalizado label="VOLTAR" type="button"/></router-link>
            </div>

        </form>
    </div>
</template>

<script>
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'
import Button from '../shared/button/Button.vue';
import Image from '../../model/image/Image';
import ImageService from "../../domain/image/ImageService";

export default {
    components: {
        'image-responsive': ImageResponsive,
        'botao-personalizado': Button
    },

    data() {
        return {
            image : new Image(),
            id : this.$route.params.id
        }
    },

    methods : {
        save() {
            this.service
                .save(this.image)
                .then(() => {
                    if (this.id) {
                        this.$router.push({ name : 'home' });
                    }
                    this.image = new Image();
                }, err => console.log(err));
        }
    },

    created() {
        this.service = new ImageService(this.$resource);

        if (this.id) {
            this.service
                .search(this.id)
                .then(image => this.image = image);
        }
    }
}
</script>

<style scoped>
    .center {
        text-align: center;
    }

    .control {
        font-size: 1.2em;
        margin-bottom: 20px;
    }

    .control label {
        display: block;
        font-weight: bold;
    }

    .control label + input, .control textarea {
        width: 100%;
        font-size: inherit;
        border-radius: 5px
    }
</style>