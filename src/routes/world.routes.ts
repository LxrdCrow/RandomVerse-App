import { Router } from 'express';
import { WorldController } from '../controllers/world.controller';

const router = Router();

// Generate and save a random world
router.get('/random', WorldController.generateAndSave);

// Read all worlds
router.get('/', WorldController.getAll);

// Read a single world by ID
router.get('/:id', WorldController.getById);

// Create a new world from request body
router.post('/', WorldController.createFromBody);

// Update an existing world by ID
router.put('/:id', WorldController.update);

// Delete a world by ID
router.delete('/:id', WorldController.delete);

export default router;

