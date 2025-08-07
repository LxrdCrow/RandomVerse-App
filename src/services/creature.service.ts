import { CreatureGenerator, IGeneratedCreature, CreatureModel, ICreature } from '../models';

export class CreatureService {
    static async createCreature(creatureData: IGeneratedCreature): Promise<ICreature> {
        const creature = new CreatureModel(creatureData);
        return creature.save();
    }

    static async createRandomCreature(): Promise<ICreature> {
        const creatureData = CreatureGenerator.generate();
        return CreatureService.createCreature(creatureData);
    }

    static async createRandomCreatures(count: number): Promise<ICreature[]> {
        const creaturesData = CreatureGenerator.generateMany(count);
        return Promise.all(creaturesData.map(creatureData => CreatureService.createCreature(creatureData)));
    }

    static async getAllCreatures(): Promise<ICreature[]> {
        return CreatureModel.find().exec();
    }

    static async getCreatureById(creatureId: string): Promise<ICreature | null> {
        return CreatureModel.findById(creatureId).exec();
    }

    static async updateCreature(creatureId: string, creatureData: Partial<ICreature>): Promise<ICreature | null> {
        return CreatureModel.findByIdAndUpdate(creatureId, creatureData, { new: true }).exec();
    }

    static async deleteCreatureById(creatureId: string): Promise<ICreature | null> {
        return CreatureModel.findByIdAndDelete(creatureId).exec();
    }

}