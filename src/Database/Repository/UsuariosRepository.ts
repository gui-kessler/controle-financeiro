import { getDataBase } from "../database.ts";
import { UsuarioSchema } from "../../Models/Usuario.ts";

const db = await getDataBase('ademir');

const insert = async (usuario: UsuarioSchema): UsuarioSchema => {
    const collection = await getCollection();
    const inserted = await collection.insertOne(usuario);
    return inserted;
}

const find = async (username: string): UsuarioSchema => {
    const collection = await getCollection();
    const usuario = await collection.findOne({ username: username })
    return usuario;
};

const getCollection = async () => {
    return await db.collection<UsuarioSchema>('usuarios');
};

export {
    insert,
    find
};