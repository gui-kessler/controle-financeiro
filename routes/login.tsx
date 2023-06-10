import { Handlers, PageProps } from "$fresh/server.ts";
import { Nav } from "../components/Nav.tsx";

export const handler: Handlers = {
    GET(_req, ctx) {
      return ctx.render();
    },

    async POST(req, ctx) {
      const form = await req.formData();
      
      const headers = new Headers();
      headers.set("location", "/");
      return new Response(null, {
        status: 200,
        headers,
      });
    },
};

export default function Login(data: PageProps) {
    return (
        <>
            <Nav />
            <h1>Login</h1>
            <form method="post">
              <input type="text" name="username" />
              <input type="password" name="password" />
              <button type="submit">Login</button>
            </form>
            {/* <form method="post">
                <input type="email" name="email" value="" />
                <button type="submit">Subscribe</button>
            </form> */}
        </>
    );
}