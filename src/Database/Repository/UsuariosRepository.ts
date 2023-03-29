import { getDataBase } from "../database.ts";
import { UsuarioSchema } from "../../Models/Usuario.ts";
import { ObjectId } from "../../deps.ts";

const db = await getDataBase('ademir');

export const insert = async (usuario: UsuarioSchema): Promise<ObjectId | undefined> => {
    const collection = db?.collection<UsuarioSchema>('usuarios');
    return await collection?.insertOne(usuario);
}

export const find = async (username: string): Promise<UsuarioSchema | undefined> => {
    const collection = db?.collection<UsuarioSchema>('usuarios');
    return await collection?.findOne({ username: username });
};
