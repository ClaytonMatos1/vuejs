import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path : '', name : 'home', component : Home, title : 'Home', menu : true },
    { path : '/cadastro', name : 'cadastro', component : Cadastro, title : 'Cadastro', menu : true },
    { path : '/cadastro/:id', name : 'update', component : Cadastro, title : 'Cadastro', menu : false },
    { path : '*', component : Home, menu : false }
];