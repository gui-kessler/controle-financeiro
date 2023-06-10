import { Handlers, PageProps } from "$fresh/server.ts";
import { Nav } from "../components/Nav.tsx";

export const handler: Handlers = {
    GET(_req, ctx) {
      return ctx.render();
    },
};

export default function Login(data: PageProps) {
    return (
        <>
            <Nav />
            <h1>Profile</h1>
        </>
    );
}