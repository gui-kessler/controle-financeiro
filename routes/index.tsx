import { Head } from "$fresh/runtime.ts";
import Template from "../components/Template.tsx";
import { tw } from "../utils/twind.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <Template>
          <p class={tw`text-xl`}>
            Sem dashboard no momento &#128077;
          </p>
        </Template>
      </div>
    </>
  );
}
