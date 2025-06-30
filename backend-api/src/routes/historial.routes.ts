import { Router } from "express";
import {
    getHistoriales,
    //getHistorialByIdUsuario,
    //createHistorial,
    //deleteHistorial,
    //updateHistorial

} from "../controllers/historial.controller";

const router = Router();

router.get('/', getHistoriales);
//router.get('/:id-usuario', getHistorialByIdUsuario);
//router.post('/:id-usuario', createHistorial);
//router.put('/:id', updateHistorial);
//router.delete('/:id', deleteHistorial);

export default router;