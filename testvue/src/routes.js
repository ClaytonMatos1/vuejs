import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { path : '', name : 'home', component : Home, title : 'Home', menu : true, id : 1 },
    { path : '/cadastro', name : 'cadastro', component : Cadastro, title : 'Cadastro', menu : true, id : 2 },
    { path : '/cadastro/:id', name : 'update', component : Cadastro, title : 'Cadastro', menu : false, id : 3 },
    { path : '*', component : Home, menu : false, id : 4 }
];