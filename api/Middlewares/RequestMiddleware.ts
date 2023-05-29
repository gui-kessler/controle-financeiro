import { Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";
/* import { Middleware, decodeJwt } from "../deps.ts";

export const RequestMiddleware: Middleware = async (ctx, next) => {
    const body = await ctx.request.body().value;
    if (!body.token) {
        ctx.response.status = 401;
    }
    const token = decodeJwt(body?.token);
    next();
} */