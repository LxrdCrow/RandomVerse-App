import { Request, Response, NextFunction, RequestHandler } from "express";
import { CreatureService } from "../services/creature.service";




export class CreatureController {
    static createCreature = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const creatureData = req.body;
            const creature = await CreatureService.createCreature(creatureData);
            res.status(201).json(creature);
        }   catch (err) {
            next(err);
        }
    };

    static getAllCreatures = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const creatures = await CreatureService.getAllCreatures();
            res.status(200).json(creatures);
        }   catch (err) {
            next(err); 
        }
     };

   //GET /creature/:id
   static getCreatureById: RequestHandler = async (req, res, next) => {
       try {
            const creatureId = req.params.id;
            const creature = await CreatureService.getCreatureById(creatureId);
   
            if (!creature) {
            res.status(404).json({ error: 'Creature not found' });
            return;         
            }
    
            res.status(200).json(creature);
        }   catch(err) {
            next(err);
        }
     };

     //PUT /creature/:id
     static updateCreature: RequestHandler = async (req, res, next) => {
        try {
            const creatureId = req.params.id;
            const updateData = req.body;
            const updated = await CreatureService.updateCreature(creatureId, updateData);

            if (!updated) {
                res.status(404).json({ error: 'Creature not found'})
                return;
            }

            res.status(200).json(updated)
        }   catch(err) {
            next(err);
        }

     };

     //DELETE /creature/:id
     static deleteCreature: RequestHandler = async (req, res, next) => {
        try {
            const creatureId = req.params.id;
            const deleteData = req.body;
            const deleted = await CreatureService.deleteCreatureById(creatureId);

            if (!deleted) {
                res.status(404).json({error: 'Creature not found'});
                return;
            }

            res.status(204);
        }   catch(err) {
            next(err);
        }
     }

};