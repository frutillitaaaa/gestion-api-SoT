import { Router } from "express";
import type { RequestHandler } from 'express';
import {
  createAlimentacion,
  deleteAlimentacion,
  getAlimentaciones,
  updateAlimentacion
} from "../controllers/alimentacion.controller";

const router = Router();

router.get('/usuario/:id_usuario/alimentaciones', getAlimentaciones);
router.post('/usuario/:id_usuario/alimentaciones', createAlimentacion as RequestHandler);
router.put('/:id', updateAlimentacion);
router.delete('/:id', deleteAlimentacion);

export default router;