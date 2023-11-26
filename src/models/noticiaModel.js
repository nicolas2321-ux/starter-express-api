import mongoose from "mongoose";
import { db } from "../database/mongo";



const notificiaSchema = new mongoose.Schema({
    titulo: String,
    cuerpo: String,
    estado: Boolean,
    imagen: String
});
export const Noticia = mongoose.model("Noticias", notificiaSchema);