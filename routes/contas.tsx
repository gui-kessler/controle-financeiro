import { Handlers, PageProps } from "$fresh/server.ts";
import { all } from "../core/Controllers/ContaController.ts";
import Template from "../components/Template.tsx";
import TableContas from "../islands/TableContas.tsx";

interface IConta {
    _id: number;
    name: string;
    value: number;
    vencimento: Date;
    category: string;
    pago: boolean;
}

export const handler: Handlers = {
    async GET(_req, ctx) {
      const contas = await all(); 
      return ctx.render(contas);
    },
};

export default function Contas({data}: PageProps<IConta[]>) {
    return (
        <Template>
            <TableContas contas={data}/>
        </Template>
    );
}