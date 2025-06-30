import { Router } from 'express';

import usuarioRoutes from './usuario.routes';
import authRoutes from './auth.routes';
import alimentacionRoutes from './alimentacion.routes';
import historialRoutes from './historial.routes';

const router = Router();

router.use('/usuarios', usuarioRoutes);
router.use('/auth', authRoutes);
router.use('/alimentaciones', alimentacionRoutes);
router.use('/historiales', historialRoutes);

export default router;