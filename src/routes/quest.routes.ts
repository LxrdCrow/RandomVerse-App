import { Router } from 'express';
import { QuestController } from '../controllers/quest.controller';

const router = Router();

router.post('/', QuestController.createQuest);
router.get('/', QuestController.getAllQuests);
router.get('/:id', QuestController.getQuestById);
router.put('/:id', QuestController.updateQuest);
router.delete('/:id', QuestController.deleteQuest);

export default router;

