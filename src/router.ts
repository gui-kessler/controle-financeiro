import { Router } from "./deps.ts"
import { login } from "./Controllers/LoginController.ts";

const router = new Router();

router.get("/", (context) => {
    context.response.body = "Hello World";
});

router.post("/login", login);

export default router;