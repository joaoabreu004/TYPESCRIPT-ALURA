import { NegociacaoController } from './controllers/negociacao-controller.js';


const controller = new NegociacaoController(); 

//POSSIVELMENTE É NULO
const form = document.querySelector('.form'); 
if(form ){
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.adiciona(); 
    })
}else{
    throw Error('Não foi possível inicializar a aplicação, verifique se o form existe')
}



