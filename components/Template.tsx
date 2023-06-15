import { Fragment, ComponentChildren } from "preact";
import { tw } from "../utils/twind.ts";
import { Nav } from "./Nav.tsx";

type Props = {
    children: ComponentChildren;
}

export default function Template({children}: Props) {
    return (
        <Fragment>
            <Nav />
            <div class={tw`mx-auto flex flex-col items-center w-3/4`}>
                {children}
            </div>
        </Fragment>
    );
}
