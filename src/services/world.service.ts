import { WorldGenerator, IGeneratedWorld, WorldModel, IWorld } from '../models';


export class WorldService {
  static async createRandomWorld(): Promise<IWorld> {
    const data = WorldGenerator.generate();
    return WorldModel.create(data);
  }

  static async createFromPayload(payload: Partial<IGeneratedWorld>): Promise<IWorld> {
    const world = new WorldModel(payload);
    return world.save();
  }

  static async getAllWorlds(): Promise<IWorld[]> {
    return WorldModel.find().exec();
  }

  static async getWorldById(id: string): Promise<IWorld | null> {
    return WorldModel.findById(id).exec();
  }

  static async createWorld(data: IGeneratedWorld): Promise<IWorld> {
    const world = new WorldModel(data);
    return world.save();
  }

  static async updateWorld(id: string, data: Partial<IGeneratedWorld>): Promise<IWorld | null> {
    return WorldModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  static async deleteWorld(id: string): Promise<IWorld | null> {
    return WorldModel.findByIdAndDelete(id).exec();
  }
}

