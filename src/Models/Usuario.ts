import { ObjectId } from "../deps.ts";

export interface UsuarioSchema {
    _id: ObjectId;
    username: string;
    nome: string;
    password: string;
    role: string;
    database: string;
}