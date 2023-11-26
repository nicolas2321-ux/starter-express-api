import { db } from "../database/mongo"
import { tarea } from "../models/tareasModel"
import { Usuario } from "../models/usuariosModel"
const Jwt = require('jsonwebtoken')

export const testController = async (req, res) => {
const usuarios =  await Usuario.find({})
console.log(usuarios)
res.json(usuarios)

}

export const testController2 = async (req, res) => {
    const usuarios =  await Usuario.find({})
    for (const usuario of usuarios) {
        console.log(usuario.nombre)
        usuario.nombre = "Juancho2"
        usuario.save()
    }
    res.status(200).json({message: "ok"})
}

export const testController3 = async (req, res) => {
    await Usuario.findOneAndDelete({nombre: "Juan"})
    res.status(200).json({message: "ok"})
}
export const testController4 = async (req, res) => {
    const usuario = await Usuario.findOne({nombre: "Juancho2"})
    const tareas = new tarea({
        nombre: "Tarea 1",
        usuario: usuario //AGREGAR CON USUARIO
    })
    tareas.save()
    res.status(200).json({message: "ok"})
}
export const testController5 = async (req, res) => {
    const usuario = await Usuario.findOne({nombre: "Juancho2"})
    const tareas = await tarea.find({usuario:usuario}).populate("usuario") //JOIN CON UN WHERE
    console.log(tareas)
    res.status(200).json(tareas)
}

export const login = async (req, res) => {
    const {correo} = req.body
    try {
        const usuario = await Usuario.find({correo: correo})
        if(usuario.length > 0){
            const token = Jwt.sign({usuario}, 'palabraSecreta')
            console.log(token)
            res.status(200).json({token: token})
        }else{
            res.status(400).json({message: "no se encontraron estas credenciales"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error"})
    }
}

export const register = async (req, res) => {
    const {nombre, usuario, correo} = req.body
    try {
        const usuario = new Usuario({
            nombre: nombre,
            usuario: usuario,
            correo: correo
        })
        await usuario.save()
        res.status(200).json({message: "ok"})
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.correo) {
            return res.status(400).json({ message: 'Correo electrónico ya registrado' });
          }else{


        console.log(error)
        res.status(400).json({message: "error"})
          }
    }

}

