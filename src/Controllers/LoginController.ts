import { find } from "../Database/Repository/UsuariosRepository.ts";

const login = async ({request, response}: {request: any, response: any}) => {
    const body = await request.body().value;
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            message: 'Nenhuma informação recebida'
        };
        return;
    }

    const usuario = await find(body?.username);
    if (!usuario) {
        response.status = 404;
        response.body = {
            success: false,
            message: 'Usuario não encontrado'
        };
        return;
    }

    if (usuario.password !== body.password) {
        response.status = 301;
        response.body = {
            success: false,
            message: 'Senha incorreta'
        };
        return;
    }

    const token = "asdasdaskd23fyd7y7sdf65sd";
    response.status = 200;
    response.body = {
        success: true,
        token
    }
    return;
};

export {
    login
};