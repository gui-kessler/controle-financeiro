import { type } from "https://deno.land/std@0.140.0/_wasm_crypto/crypto.wasm.mjs";
import { ObjectId } from "../deps.ts";

export type ContaSchema = {
    _id: ObjectId;
    name: string;
    category: string;
    vencimento: Date;
    value: number;
    competencia: Date;
    pago: boolean;
}