// src/controllers/region.controller.ts
import { RequestHandler } from 'express';
import { RegionService } from '../services/region.service';

export class RegionController {
  // GET /regions
  static getAllRegions: RequestHandler = async (_req, res, next) => {
    try {
      const regions = await RegionService.getAllRegions();
      res.status(200).json(regions);
    } catch (err) {
      next(err);
    }
  };

  // POST /regions
  static createRegion: RequestHandler = async (req, res, next) => {
    try {
      const regionData = req.body;
      const newRegion = await RegionService.createRegion(regionData);
      res.status(201).json(newRegion);
    } catch (err) {
      next(err);
    }
  };

  // DELETE /regions/:id
  static deleteRegion: RequestHandler = async (req, res, next) => {
    try {
      const regionId = req.params.id;
      const deleted = await RegionService.deleteRegionById(regionId);
      if (!deleted) {
        res.status(404).json({ error: 'Region not found' });
        return;
      }
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  };
}


