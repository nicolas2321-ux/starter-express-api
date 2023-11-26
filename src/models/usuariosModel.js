import mongoose from "mongoose";
import { db } from "../database/mongo";



const usuarioSchema = new mongoose.Schema({
    nombre: String,
    usuario: String,
    correo: { type: String, unique: true },
});
export const Usuario = mongoose.model("Usuario", usuarioSchema);