import { Handlers, PageProps } from "$fresh/server.ts";
import { all } from "../api/Controllers/ContaController.ts";
import { Nav } from "../components/Nav.tsx";

export const handler: Handlers = {
    async GET(_req, ctx) {
      const contas = await all(); 
      return ctx.render(contas);
    },
};

export default function Contas(data: PageProps) {
    return (
        <>
            <Nav></Nav>
            <h1>conta1</h1>
            <h1>conta2</h1>
            <h1>conta3</h1>
            <h1>conta4</h1>
            <p>{JSON.stringify(data.data)}</p>
        </>
    );
}