import { Router } from "express";

import { verificarToken } from "../middlewares/verificarToken";
import { agregarRespuesta, crearPregunta, eliminarPregunta, misPreguntas, traerTodasPreguntas } from "../controllers/FAQController";

const router = Router();

router.get('/traerPreguntas', verificarToken, traerTodasPreguntas)
router.post('/crearPregunta', verificarToken, crearPregunta)
router.post('/agregarRespuesta', verificarToken, agregarRespuesta)
router.get('/misPreguntas', verificarToken, misPreguntas)
router.get('/eliminarPregunta/:id', verificarToken, eliminarPregunta)
export default router;