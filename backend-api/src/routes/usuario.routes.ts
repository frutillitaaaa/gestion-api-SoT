import { Router } from "express";
import {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    deleteUsuario,
    updateUsuario

} from "../controllers/usuario.controller";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;