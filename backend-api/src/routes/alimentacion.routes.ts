import { Router } from "express";
import {
    getAlimentaciones,
    createAlimentacion,
    updateAlimentacion,
    deleteAlimentacion,

} from "../controllers/alimentacion.controller";

const router = Router();

router.get('/:id', getAlimentaciones);
router.post('/:id', createAlimentacion);
router.put('/:id', updateAlimentacion);
router.delete('/:id', deleteAlimentacion);

export default router;