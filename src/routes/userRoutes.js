import { Router } from "express";
import { login, register, testController, testController2, testController3, testController4, testController5 } from "../controllers/userController";
import { verificarToken } from "../middlewares/verificarToken";

const router = Router();

router.get("/", testController);
router.get("/test2", testController2);
router.get("/test3", testController3);
router.get("/test4", testController4);
router.get("/test5", testController5);
router.post('/login', login);
router.post('/register',register);
export default router;