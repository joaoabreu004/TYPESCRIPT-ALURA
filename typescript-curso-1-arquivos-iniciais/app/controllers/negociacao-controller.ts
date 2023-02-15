import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement ;
    private inputQuantidade: HTMLInputElement ;
    private inputValor: HTMLInputElement ; 
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {

        this.inputData = document.querySelector('#data') as HTMLInputElement; 
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;;
        this.negociacoesView.update(this.negociacoes);
    }


    public adiciona(): void {

        // ZÉ, VOCÊ JÁ VIU ISSO?

        const negociacao = Negociacao.criaDe(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas'); 
            return; 
        }
            this.negociacoes.adiciona(negociacao);
            console.log(this.negociacoes.lista());
            this.atualizaView();
            this.limparFormulario();
        

    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação Cadastrada Com Sucesso!")
    }

    private ehDiaUtil(date: Date){
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
}