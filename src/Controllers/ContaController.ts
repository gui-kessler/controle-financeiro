import { Context } from "../deps.ts";
import { ContaRepository } from "../Models/Conta.ts";

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
        console.log(body);
        const contas = await repository.find(body.data);
        ctx.response.body = contas;
    } catch (e: any) {
        console.log(e);
    }
}