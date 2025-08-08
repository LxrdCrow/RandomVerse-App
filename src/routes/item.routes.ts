import { Router } from 'express';
import { ItemController } from '../controllers/item.controller';

const router = Router();

// Crea un item
router.post('/', ItemController.createItem);

// Crea un item random
router.post('/random', ItemController.createRandomItem);

// Crea più item random (es: ?count=3)
router.post('/random-many', ItemController.createRandomItems);

// Ottieni tutti gli item
router.get('/', ItemController.getAllItems);

// Ottieni item per ID
router.get('/:id', ItemController.getItemById);

// Aggiorna item per ID
router.put('/:id', ItemController.updateItem);

// Elimina item per ID
router.delete('/:id', ItemController.deleteItem);

export default router;
