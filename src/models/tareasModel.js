import mongoose from "mongoose";
import { db } from "../database/mongo";
import { Usuario } from "./usuariosModel";



const tareasSchema = new mongoose.Schema({
    nombre: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});
export const tarea = mongoose.model("Tareas", tareasSchema);