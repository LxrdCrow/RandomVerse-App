import { Request, Response, NextFunction, RequestHandler } from 'express';
import { CharacterService } from '../services/character.service';

export class CharacterController {
  static createCharacter = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const characterData = req.body;
      const character = await CharacterService.createCharacter(characterData);
      res.status(201).json(character);
    } catch (err) {
      next(err);
    }
  };

  static getAllCharacters = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const characters = await CharacterService.getAllCharacters();
      res.status(200).json(characters);
    } catch (err) {
      next(err);
    }
  };

    // GET /characters/:id
  static getCharacterById: RequestHandler = async (req, res, next) => {
    try {
      const characterId = req.params.id;
      const character = await CharacterService.getCharacterById(characterId);

      if (!character) {
        res.status(404).json({ error: 'Character not found' });
        return;         
      }

      res.status(200).json(character);
    } catch (err) {
      next(err);
    }
  };

  // PUT /characters/:id
  static updateCharacter: RequestHandler = async (req, res, next) => {
    try {
      const characterId = req.params.id;
      const updateData = req.body;
      const updated = await CharacterService.updateCharacter(characterId, updateData);

      if (!updated) {
        res.status(404).json({ error: 'Character not found' });
        return;
      }

      res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  };

  // DELETE /characters/:id
  static deleteCharacter: RequestHandler = async (req, res, next) => {
    try {
      const characterId = req.params.id;
      const deleted = await CharacterService.deleteCharacterById(characterId);

      if (!deleted) {
        res.status(404).json({ error: 'Character not found' });
        return;
      }

      res.sendStatus(204);
    } catch (err) {
      next(err);
    }

  }
};

