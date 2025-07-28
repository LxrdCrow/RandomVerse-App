// src/controllers/world.controller.ts
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { WorldService } from '../services/worldService';

export class WorldController {
  static generateAndSave: RequestHandler = async (req, res, next) => {
    try {
      const world = await WorldService.createRandomWorld();
      // NON fare "return" qui:
      res.status(201).json(world);
    } catch (err) {
      next(err);
    }
  };

  static createFromBody: RequestHandler = async (req, res, next) => {
    try {
      const payload = req.body;
      const world = await WorldService.createFromPayload(payload);
      // Qui pure, solo "res" senza "return":
      res.status(201).json(world);
    } catch (err) {
      next(err);
    }
  };
}

