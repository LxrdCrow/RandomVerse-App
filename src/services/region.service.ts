import { RegionGenerator, IGeneratedRegion, RegionModel, IRegion } from "../models";

export class RegionService {
    static async createRegion(regionData: IGeneratedRegion): Promise<IRegion> {
        const region = new RegionModel(regionData);
        return region.save();
    }

    static async createRandomRegions(count: number = 1): Promise<IRegion[]> {
        const regionsData = RegionGenerator.generateMany(count);
        return Promise.all(regionsData.map(regionData => RegionService.createRegion(regionData)));
    }

    static async getAllRegions(): Promise<IRegion[]> {
        return RegionModel.find().exec();
    }

    static async updateRegion(regionId: string, regionData: Partial<IRegion>): Promise<IRegion | null> {
        return RegionModel.findByIdAndUpdate(regionId, regionData, { new: true }).exec();
    }

    static async deleteRegionById(regionId: string): Promise<IRegion | null> {
        return RegionModel.findByIdAndDelete(regionId).exec();
    }

    static async getRegionById(regionId: string): Promise<IRegion | null> {
        return RegionModel.findById(regionId).exec();
    }
}