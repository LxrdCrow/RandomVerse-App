import { Router } from 'express';
import { ItemController } from '../controllers/item.controller';

const router = Router();

router.post('/', ItemController.createItem);
router.post('/random', ItemController.createRandomItem); //for random item
router.post('/random-many', ItemController.createRandomItems); //for multiple random items
router.get('/', ItemController.getAllItems);
router.get('/:id', ItemController.getItemById);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

export default router;
