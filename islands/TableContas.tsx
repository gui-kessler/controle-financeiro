import { useState } from "preact/hooks";
import { tw } from "../utils/twind.ts";

interface IConta {
    _id: number;
    name: string;
    value: number;
    vencimento: Date;
    category: string;
    pago: boolean;
}

interface TableContasProps {
    contas: IConta[];
}

export default function TableContas(props: TableContasProps) {
    const [selected, setSelected] = useState<IConta>();
    const contas = props.contas.map((conta) => {
        return (
            <tr class={tw`border-2 border-solid`} onClick={() => setSelected(conta)}>
                <td class={tw`border-1 text-left`}>{conta.name}</td>
                <td class={tw`border-1 text-right`}>{conta.value.toFixed(2)}</td>
                <td class={tw`border-1 text-center`}>{conta.vencimento.toDateString()}</td>
                <td class={tw`border-1 text-left`}>{conta.category}</td>
                <td class={tw`border-1 text-center`}>{conta.pago ? 'Pago' : 'Não Pago'}</td>
            </tr>
        );
    });

    return (
        <>
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
            <button onClick={() => (alert(1))}>adsfgadfg</button>
        </>
    );
}