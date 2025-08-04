// src/controllers/world.controller.ts
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { WorldService } from '../services/world.service';

export class WorldController {
  static generateAndSave: RequestHandler = async (req, res, next) => {
    try {
      const world = await WorldService.createRandomWorld();
      res.status(201).json(world);
    } catch (err) {
      next(err);
    }
  };

  static getAll: RequestHandler = async (_req, res, next) => {
    try {
      const worlds = await WorldService.getAllWorlds();
      res.status(200).json(worlds);
    } catch (err) {
      next(err);
    }
  };

  static getById: RequestHandler = async (req, res, next) => {
    try {
      const worldId = req.params.id;
      const world = await WorldService.getWorldById(worldId);
      if (!world) {
        res.status(404).json({ error: 'World not found' });
        return;
      }
      res.status(200).json(world);
    } catch (err) {
      next(err);
    }
  };

  static createFromBody: RequestHandler = async (req, res, next) => {
    try {
      const payload = req.body;
      const world = await WorldService.createFromPayload(payload);
      res.status(201).json(world);
    } catch (err) {
      next(err);
    }
  };

  static update: RequestHandler = async (req, res, next) => {
    try {
      const worldId = req.params.id;
      const payload = req.body;
      const updatedWorld = await WorldService.updateWorld(worldId, payload);
      if (!updatedWorld) {
        res.status(404).json({ error: 'World not found' });
        return;
      }
      res.status(200).json(updatedWorld);
    } catch (err) {
      next(err);
    }
  };

  static delete: RequestHandler = async (req, res, next) => {
    try {
      const worldId = req.params.id;
      const deletedWorld = await WorldService.deleteWorld(worldId);
      if (!deletedWorld) {
        res.status(404).json({ error: 'World not found' });
        return;
      }
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  static createWorld: RequestHandler = async (req, res, next) => {
    try {
      const payload = req.body;
      const world = await WorldService.createWorld(payload);
      res.status(201).json(world);
    } catch (err) {
      next(err);
    }
  };
}



