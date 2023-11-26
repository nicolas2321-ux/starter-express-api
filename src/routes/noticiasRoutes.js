import { Router } from "express";

import { verificarToken } from "../middlewares/verificarToken";
import { crearNoticia, editarNoticia, eliminarNoticia, traerTodasNoticias } from "../controllers/noticiasController";

const router = Router();

router.post('/crearNoticia', verificarToken, crearNoticia)
router.get('/traerTodasNoticias', verificarToken, traerTodasNoticias)
router.post('/editarNoticia/:id', verificarToken, editarNoticia)
router.patch('/eliminarNoticia/:id', verificarToken, eliminarNoticia)
export default router;