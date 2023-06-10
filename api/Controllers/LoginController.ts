import { createJwt } from "../deps.ts";

export const login = async (data) => {
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
    
    return;
};
