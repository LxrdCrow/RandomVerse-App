import { Router } from 'express';
import { CreatureController } from '../controllers/creature.controller';

const router = Router();

router.post('/', CreatureController.createCreature);
router.get('/', CreatureController.getAllCreatures);
router.get('/:id', CreatureController.getCreatureById);
router.put('/:id', CreatureController.updateCreature);
router.delete('/:id', CreatureController.deleteCreature);

export default router;