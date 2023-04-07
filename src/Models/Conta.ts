import { ObjectId } from "../deps.ts";
import { CrudClass } from "../Database/Crud.ts";

export type Conta = {
    _id: ObjectId;
    name: string;
    category: string;
    vencimento: Date;
    value: number;
    competencia: Date;
    pago: boolean;
}

export class ContaRepository extends CrudClass<Conta>
{
    readonly collectionName = 'contas';

    constructor() {
        super('contas_guilherme'); // substituir o parametro do banco pelo banco do usuario logado, recuperado pela sessao
        this.collection = this.db?.collection(this.collectionName);
    }

    public validate = (conta: any): void => {
        if (!conta.name) {
            throw 'Conta sem nome';
        }

        if (!conta.category) {
            throw 'Conta sem categoria';
        }

        if (!conta.vencimento) {
            throw 'Conta sem vencimento';
        }

        if (!conta.value) {
            throw 'Conta sem valor';
        }

        if (!conta.competencia) {
            throw 'Conta sem comeptencia';
        }
    }
}
