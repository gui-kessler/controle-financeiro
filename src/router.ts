import { Router } from "./deps.ts"
import { login } from "./Controllers/LoginController.ts";
import { RequestMiddleware } from "./Middlewares/RequestMiddleware.ts";

const router = new Router();

router.get("/", (context) => {
    context.response.body = "Hello World";
});

// login routes
router.post("/login", login);

// conta routes
router.get("/contas", () => {});
router.post("/contas", () => {});
router.put("/contas", () => {});
router.delete("/contas", () => {});

export default router;