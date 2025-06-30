import { Router } from "express";
import {
    getHistoriales,
    getHistorialPorUsuario,
    crearHistorial,
    deleteHistorial,
    updateHistorial

} from "../controllers/historial.controller";

const router = Router();

router.get('/', getHistoriales);
router.get('/:id', getHistorialPorUsuario);
router.post('/:id', crearHistorial);
router.put('/:id', updateHistorial);
router.delete('/:id', deleteHistorial);

export default router;