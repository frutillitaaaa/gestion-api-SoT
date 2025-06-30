import { Router } from 'express';

import { loginHandler, registroHandler } from '../controllers/auth.controller';

const router = Router();

router.post('/login', loginHandler);
router.post('/registro', registroHandler);

export default router;