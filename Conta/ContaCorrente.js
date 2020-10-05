import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    //comportamento especializado

    static numeroDeContas = 0;

    constructor(cliente, agencia) {

        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {

        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

    test() {
        super.teste();
        console.log(`Teste na classe ContaCorrente`);
    }
}
