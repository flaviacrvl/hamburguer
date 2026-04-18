import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController.js';

const router = new Router();

router.post('/', AvaliacaoController.store); 

export default router;