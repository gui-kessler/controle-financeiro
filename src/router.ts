import { Router } from "./deps.ts"
import { login } from "./Controllers/LoginController.ts";
import { 
    find as findConta, 
    insert as insertConta } 
from "./Controllers/ContaController.ts";

const router = new Router();

router.get("/", (context) => {
    context.response.body = "Hello World";
});

// login routes
router.post("/api/login", login);

// conta routes
router.get("/api/contas", () => {});
router.post("/api/contas/find", findConta);
router.post("/api/contas", insertConta);
router.put("/api/contas", () => {});
router.delete("/api/contas", () => {});

export default router;