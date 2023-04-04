import { Application } from "./deps.ts";
import router from "./router.ts"

const app = new Application();
const PORT = 5000;

app.use(router.routes())
app.use(router.allowedMethods());

console.log(`App running at http://localhost:${PORT}/`);
await app.listen({port: PORT});