import { ContaRepository } from "../Models/Conta.ts";

/* export const insert = async () => {
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
} */

/* export const find = async () => {
    try {
        const repository = new ContaRepository();
        const body = await ctx.request.body().value;
        const filters: any = {};

        body.data.forEach((f: any) => {
            const rule = new Map([
                ['$' + f?.rule, f.value]
            ]);
            filters[f.field] = Object.fromEntries(rule)
        });

        const contas = await repository.find(filters);
        ctx.response.body = contas;
    } catch (e: any) {
        console.log(e);
    }
} */

export const all = async () => {
    try {
        const repository = new ContaRepository();
        const contas = await repository.all();
        return contas;
    } catch (e: any) {
        console.log(e);
    }
};