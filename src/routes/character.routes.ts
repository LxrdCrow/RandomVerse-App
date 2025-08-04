import { Router } from 'express';
import { CharacterController } from '../controllers/character.controller';

const router = Router();

router.post('/', CharacterController.createCharacter);
router.get('/', CharacterController.getAllCharacters);
router.get('/:id', CharacterController.getCharacterById);
router.put('/:id', CharacterController.updateCharacter);
router.delete('/:id', CharacterController.deleteCharacter);

export default router;

