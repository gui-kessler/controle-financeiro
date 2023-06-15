import { Handlers, PageProps } from "$fresh/server.ts";
import { all } from "../core/Controllers/ContaController.ts";
import Template from "../components/Template.tsx";
import { tw } from "../utils/twind.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
      const contas = await all(); 
      return ctx.render(contas);
    },
};

export default function Contas(data: PageProps) {
    const contas = data.data.map(conta => {
        return (
            <tr class={tw`border-2 border-solid`}>
                <td class={tw`border-1 text-left`}>{conta.name}</td>
                <td class={tw`border-1 text-right`}>{conta.value.toFixed(2)}</td>
                <td class={tw`border-1 text-center`}>{new Date(conta.vencimento).toDateString()}</td>
                <td class={tw`border-1 text-left`}>{conta.category}</td>
                <td class={tw`border-1 text-center`}>{conta.pago ? 'Pago' : 'Não Pago'}</td>
            </tr>
        );
    });

    return (
        <Template>
            <table class={tw`table-auto w-full mt-6`}>
                <tr class={tw`border-2 border-solid`}>
                    <td class={tw`font-bold text-center border-1`}>Nome</td>
                    <td class={tw`font-bold text-center border-1`}>Valor</td>
                    <td class={tw`font-bold text-center border-1`}>Vencimento</td>
                    <td class={tw`font-bold text-center border-1`}>Categoria</td>
                    <td class={tw`font-bold text-center border-1`}>Pago</td>
                </tr>
                {contas}
            </table>
        </Template>
    );
}