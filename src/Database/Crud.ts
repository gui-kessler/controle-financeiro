import { Collection, Database, ObjectId, InsertDocument } from "../deps.ts";
import { getDataBase } from "./database.ts";

export class CrudClass<T>
{
    db: Database | undefined;
    collection: Collection<T> | undefined;

    constructor(database = 'ademir') {
        this.db = getDataBase(database);
    }

    async findById(id: ObjectId): Promise<T | undefined> {
        return await this.collection?.findOne({ _id: id });
    }

    async insert(record: InsertDocument<T>): Promise<ObjectId | undefined> {
        const id = await this.collection?.insertOne(record);
        return id;
    }
}
