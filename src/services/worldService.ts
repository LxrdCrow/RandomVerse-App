// src/services/world.service.ts
import { WorldGenerator, IGeneratedWorld } from '../models/world/world.generator';
import { WorldModel, IWorld } from '../models/world/world.schema';

export class WorldService {
  static async createRandomWorld(): Promise<IWorld> {
    const data: IGeneratedWorld = WorldGenerator.generate();
    const doc = await WorldModel.create(data);
    return doc;
  }

  static async createFromPayload(payload: Partial<IGeneratedWorld>): Promise<IWorld> {
    const doc = await WorldModel.create(payload);
    return doc;
  }
}
