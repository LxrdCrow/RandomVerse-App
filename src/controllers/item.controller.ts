import { Request, Response, NextFunction, RequestHandler } from "express";
import { ItemService } from "../services/item.service";

export class ItemController {
    static createItem: RequestHandler = async (req, res, next) => {
        try {
            const itemData = req.body;
            const item = await ItemService.createItem(itemData);
            res.status(201).json(item);
        } catch (err) {
            next(err);
        }
    };


    static createRandomItem: RequestHandler = async (_req, res, next) => {
        try {
            const item = await ItemService.createRandomItem();
            res.status(201).json(item);
        } catch (err) {
            next(err);
        }
    };


    static createRandomItems: RequestHandler = async (req, res, next) => {
        try {
            const count = parseInt(req.query.count as string) || 1;
            const items = await ItemService.createRandomItems(count);
            res.status(201).json(items);
        } catch (err) {
            next(err);
        }
    };


    static getAllItems: RequestHandler = async (_req, res, next) => {
        try {
            const items = await ItemService.getAllItems();
            res.status(200).json(items);
        } catch (err) {
            next(err);
        }
    };


    static getItemById: RequestHandler = async (req, res, next) => {
        try {
            const itemId = req.params.id;
            const item = await ItemService.getItemById(itemId);

            if (!item) {
                res.status(404).json({ error: "Item Not Found" });
                return;
            }

            res.status(200).json(item);
        } catch (err) {
            next(err);
        }
    };


    static updateItem: RequestHandler = async (req, res, next) => {
        try {
            const itemId = req.params.id;
            const updateData = req.body;
            const updatedItem = await ItemService.updateItem(itemId, updateData);

            if (!updatedItem) {
                res.status(404).json({ error: "Item Not Found" });
                return;
            }

            res.status(200).json(updatedItem);
        } catch (err) {
            next(err);
        }
    };


    static deleteItem: RequestHandler = async (req, res, next) => {
        try {
            const itemId = req.params.id;
            const deletedItem = await ItemService.deleteItem(itemId);

            if (!deletedItem) {
                res.status(404).json({ error: "Item Not Found" });
                return;
            }

            res.status(200).json(deletedItem);
        } catch (err) {
            next(err);
        }
    };
}
