import mongoose from "mongoose";
import { db } from "../database/mongo";
import { string } from "joi";



const FAQschema = new mongoose.Schema({
    titulo: String,
    cuerpo: String,
    estado: Boolean,
    respuestas: Array,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});
export const Faq = mongoose.model("Preguntas", FAQschema);