// src/routes/world.routes.ts
import { Router } from 'express';
import { WorldController } from '../controllers/WorldController';

const router = Router();

// GET /worlds/random → genera e salva un mondo casuale
router.get('/random', WorldController.generateAndSave);

// POST /worlds → salva un mondo con dati forniti via body
router.post('/', WorldController.createFromBody);

export default router;
