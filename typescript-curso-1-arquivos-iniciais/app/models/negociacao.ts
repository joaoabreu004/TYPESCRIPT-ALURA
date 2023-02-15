export class Negociacao{
    // private calopsita = 'calo'
    constructor(private _data: Date, private _quantidade: number, private _valor: number){}


    //PROGRAMAÇÃO DEFENSIVA: CÓPIAR E ENVIAR CÓPIA
    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this.quantidade * this.valor; 
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
         // EXPRESSÃO REGULAR
         const exp = /-/g;

         const date = new Date(dateString.replace(exp, ","));
         const quantidade = parseInt(quantidadeString);
         const valor = parseFloat(valorString);
         return new Negociacao(
             // PRÉ-CONVERSÃO DE STRING PARA DATE/NUMBER
             date,
             quantidade,
             valor
         ) 

    }
}