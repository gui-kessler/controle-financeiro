import { Context, ObjectId } from "../deps.ts";
import { ContaRepository } from "../Models/Conta.ts";

interface filterConta {
    _id?: ObjectId;
    name?: string;
    category?: string;
    vencimento?: Date;
    value?: number;
    competencia?: Date;
    pago?: boolean
}

export const insert = async (ctx: Context) => {
    try {
        const repository = new ContaRepository();
        const conta = await ctx.request.body().value;

        repository.validate(conta);
        conta.vencimento = new Date(conta.vencimento);
        conta.competencia = new Date(conta.competencia);

        await repository.insert(conta);
    } catch (e: any) {
        console.log(e);
    }
}

export const find = async (ctx: Context) => {
    try {
        const repository = new ContaRepository();
        const body = await ctx.request.body().value;
        const filters: filterConta = {};

        body.data.map((f: any) => {
            console.log(filters);
            // filters[f.field]['$' + (f?.rule ?? 'eq')] = f.value;
            switch (f.field) {
                case "id":
                    filters._id = new ObjectId(f.value);
                    break;
                case "name":
                    filters.name = f.value;
                    break;
                case "value":
                    filters.value = f.value;
                    break;
                case "category":
                    filters.category = f.value;
                    break;
                case "vencimento":
                    filters.vencimento['$' + f?.rule ?? 'eq'] = new Date(f.value);
                    break;
            }
        })

        console.log(filters);

        const contas = await repository.find(filters);
        ctx.response.body = contas;
    } catch (e: any) {
        console.log(e);
    }
}