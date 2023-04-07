import { ObjectId } from "../deps.ts";
import { CrudClass } from "../Database/Crud.ts";

export type Usuario = {
    _id: ObjectId;
    username: string;
    nome: string;
    password: string;
    role: string;
    database: string;
}

export class UsuarioRepository extends CrudClass<Usuario> {
    readonly collectionName = 'usuarios';

    constructor() {
        super();
        this.collection = this.db?.collection(this.collectionName);
    }
}
