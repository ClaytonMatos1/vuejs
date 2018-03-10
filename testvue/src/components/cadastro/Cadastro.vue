<template>
    <div>
        <h1 class="center">Cadastro</h1>
        <h2 class="center">{{ image.titulo }}</h2>

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
                <router-link to="/"><botao-personalizado label="VOLTAR" type="button"/></router-link>
            </div>

        </form>
    </div>
</template>

<script>
import ImageResponsive from '../shared/image-responsive/ImageResponsive.vue'
import Button from '../shared/button/Button.vue';
import Image from '../../model/image/Image';

export default {
    components: {
        'image-responsive': ImageResponsive,
        'botao-personalizado': Button
    },

    data() {
        return {
            image : new Image()
        }
    },

    methods : {
        save() {
            this.$http.post('http://localhost:3000/v1/fotos', this.image)
                .then(() => this.image = new Image(), err => console.log(err));
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