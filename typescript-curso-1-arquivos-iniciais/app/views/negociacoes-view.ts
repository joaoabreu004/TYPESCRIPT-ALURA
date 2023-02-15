import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(modelo: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>VALOR </th>
                        <th>QUANTIDADE</th>
                    </tr>
                </thead>
                <tbody>
                    ${modelo.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>

        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data)

    }
    
}