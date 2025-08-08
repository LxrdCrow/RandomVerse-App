import { ItemGenerator, IGeneratedItem, ItemModel, IItem } from "../models";

export class ItemService {
    static async createItem(itemData: IGeneratedItem): Promise<IItem> {
        const item = new ItemModel(itemData);
        return item.save();
    }

    static async createRandomItem(): Promise<IItem> {
        const itemData = ItemGenerator.generate();
        return ItemService.createItem(itemData);
    }

    static async createRandomItems(count: number): Promise<IItem[]> {
        const itemsData = ItemGenerator.generateMany(count);
        return Promise.all(itemsData.map(itemData => ItemService.createItem(itemData)));
    }

    static async getAllItems(): Promise<IItem[]> {
        return ItemModel.find().exec();
    }

    static async getItemById(itemId: string): Promise<IItem | null> {
        return ItemModel.findById(itemId).exec();
    }

    static async updateItem(itemId: string, itemData: Partial<IItem>): Promise<IItem | null> {
        return ItemModel.findByIdAndUpdate(itemId, itemData, { new: true }).exec();
    }

    static async deleteItem(itemId: string): Promise<IItem | null> {
        return ItemModel.findByIdAndDelete(itemId).exec();
    }
}









