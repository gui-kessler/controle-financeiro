import { ObjectId } from "../deps.ts";
import { CrudClass } from "../Database/Crud.ts";

export type UsuarioType = {
    _id: ObjectId;
    username: string;
    nome: string;
    password: string;
    role: string;
    database: string;
}

export class Usuario extends CrudClass<UsuarioType> {
    readonly collectionName = 'usuarios';

    constructor() {
        super();
        this.collection = this.db?.collection(this.collectionName);
    }
}
