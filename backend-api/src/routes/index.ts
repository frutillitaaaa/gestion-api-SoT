import { Router } from 'express';

import usuarioRoutes from './usuario.routes';

const router = Router();

router.use('/usuarios', usuarioRoutes);

export default router;