import { Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { find } from "../Database/Repository/UsuariosRepository.ts";
import { createJwt } from "../deps.ts";

export const login = async (ctx: Context) => {
    const body = await ctx.request.body().value;

    if (ctx.request.headers.get("content-type") !== "application/json") {
        ctx.response.status = 400;
        ctx.response.body = {
            success: false,
            message: "Type not allowed"
        };
        return;
    }

    if (!ctx.request.hasBody) {
        ctx.response.status = 400;
        ctx.response.body = {
            success: false,
            message: 'Nenhuma informação recebida'
        };
        return;
    }

    const usuario = await find(body?.username);
    if (!usuario) {
        ctx.response.status = 401;
        ctx.response.body = {
            success: false,
            message: 'Usuario não encontrado'
        };
        return;
    }

    if (usuario.password !== body.password) {
        ctx.response.status = 401;
        ctx.response.body = {
            success: false,
            message: 'Senha incorreta'
        };
        return;
    }

    const key = await crypto.subtle.generateKey(
        { name: "HMAC", hash: "SHA-512" },
        true,
        ["sign", "verify"],
    );
    const userPayload = {
        id: usuario._id,
        username: usuario.username,
        name: usuario.nome,
        database: usuario.database,
        role: usuario.role
    }
    const token = await createJwt({alg: "HS512", typ: "JWT"}, userPayload, key);
    ctx.response.body = {
        success: true,
        token
    }
    return;
};
