import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1>Controle Financeiro</h1>
        <a href="/contas">Contas</a>
      </div>
    </>
  );
}
