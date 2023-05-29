import { Head } from "$fresh/runtime.ts";
import { Nav } from "../components/Nav.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <Nav />
      </div>
    </>
  );
}
