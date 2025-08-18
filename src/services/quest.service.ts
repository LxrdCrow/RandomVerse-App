import { QuestGenerator, IQuest, IGeneratedQuest, QuestModel } from "../models";

export class QuestService {
    static async createQuest(questData: IGeneratedQuest): Promise<IQuest> {
        const quest = new QuestModel(questData);
        return quest.save();
    }

    static async createRandomQuest(): Promise<IQuest> {
        const questData = QuestGenerator.generate();
        return QuestService.createQuest(questData);
    }

    static async createRandomQuests(count: number): Promise<IQuest[]> {
        const questsData = QuestGenerator.generateMany(count);
        return Promise.all(questsData.map(questData => QuestService.createQuest(questData)));
    }

    static async getAllQuests(): Promise<IQuest[]> {
        return QuestModel.find().exec();
    }

    static async getQuestById(questId: string): Promise<IQuest | null> {
        return QuestModel.findById(questId).exec();
    }

    static async updateQuest(questId: string, questData: Partial<IQuest>): Promise<IQuest | null> {
        return QuestModel.findByIdAndUpdate(questId, questData, { new: true }).exec();
    }

    static async deleteQuest(questId: string): Promise<IQuest | null> {
        return QuestModel.findByIdAndDelete(questId).exec();
    }
}
