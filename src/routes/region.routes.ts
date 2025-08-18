import { Router } from 'express';
import { RegionController } from '../controllers/region.controller';

const router = Router();

router.get('/', RegionController.getAllRegions);
router.post('/', RegionController.createRegion);
router.delete('/:id', RegionController.deleteRegion);

export default router;
