import { Request, Response, NextFunction, RequestHandler } from 'express';
import { QuestService } from '../services/quest.service';

export class QuestController {
    static createQuest = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const questData = req.body;
            const quest = await QuestService.createQuest(questData);
            res.status(201).json(quest);
        } catch (err) {
            next(err);
        }
    };

    static getAllQuests = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const quests = await QuestService.getAllQuests();
            res.status(200).json(quests);
        } catch (err) {
            next(err);
        }
    };

    static getQuestById: RequestHandler = async (req, res, next) => {
        try {
            const questId = req.params.id;
            const quest = await QuestService.getQuestById(questId);

            if (!quest) {
                res.status(404).json({ error: "Quest not found" });
                return;
            }

            res.status(200).json(quest);
        } catch (err) {
            next(err);
        }
    };

    static updateQuest: RequestHandler = async (req, res, next) => {
        try {
            const questId = req.params.id;
            const updateData = req.body;
            const updated = await QuestService.updateQuest(questId, updateData);

            if (!updated) {
                res.status(404).json({ error: "Quest not found" });
                return;
            }

            res.status(200).json(updated);
        } catch (err) {
            next(err);
        }
    };

    static deleteQuest: RequestHandler = async (req, res, next) => {
        try {
            const questId = req.params.id;
            const deleted = await QuestService.deleteQuest(questId);

            if (!deleted) {
                res.status(404).json({ error: "Quest not found" });
                return;
            }

            res.status(204).end();
        } catch (err) {
            next(err);
        }
    };
}
