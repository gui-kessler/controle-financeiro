import { Database, MongoClient } from "mongo";
import { config } from "config";

const USER = config().MONGO_ATLAS_USER;
const PASS = config().MONGO_ATLAS_PASSWORD;
const URI = config().MONGO_ATLAS_URI
const dbString = `mongodb+srv://${USER}:${PASS}@${URI}/?authMechanism=SCRAM-SHA-1`;
const client = new MongoClient();

try {
    await client.connect(dbString);
    console.log("Database connected!");
} catch (e: any) {
    console.log("Erro ao conectar ao cluster", e);
}

export const getDataBase = (database: string): Database | undefined => {
    try {
        const db = client.database(database);
        return db;
    } catch (e: any) {
        console.log("Erro ao conectar ao banco de dados", e);
        return undefined;
    }
};
