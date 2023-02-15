import { Negociacao } from "./negociacao.js";

// LISTA DE NEGOCIAÇÕES
//ARRAY DE NEGOCIAÇÃO negociacoes: Array<Negociacao> = []
export class Negociacoes{
    private negociacoes: Negociacao[] = []; 
    
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // SPREAD OPERATOR, UTILIZANDO UMA CÓPIA DA MINHA LISTA
    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes(); 
negociacoes.lista().forEach(n => {
    
})