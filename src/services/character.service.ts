import { CharacterGenerator, IGeneratedCharacter, CharacterModel, ICharacter } from '../models';


export class CharacterService {
    static async createCharacter(characterData: IGeneratedCharacter): Promise<ICharacter> {
        const character = new CharacterModel(characterData);
        return character.save();
    }

    static async createRandomCharacter(): Promise<ICharacter> {
        const characterData = CharacterGenerator.generate();
        return CharacterService.createCharacter(characterData);
    }

    static async createRandomCharacters(count: number): Promise<ICharacter[]> {
        const charactersData = CharacterGenerator.generateMany(count);
        return Promise.all(charactersData.map(characterData => CharacterService.createCharacter(characterData)));
    }

    static async getAllCharacters(): Promise<ICharacter[]> {
        return CharacterModel.find().exec();
    }

    static async updateCharacter(characterId: string, characterData: Partial<ICharacter>): Promise<ICharacter | null> {
        return CharacterModel.findByIdAndUpdate(characterId, characterData, { new: true }).exec();
    }

    static async deleteCharacterById(characterId: string): Promise<ICharacter | null> {
        return CharacterModel.findByIdAndDelete(characterId).exec();
    }

    static async getCharacterById(characterId: string): Promise<ICharacter | null> {
        return CharacterModel.findById(characterId).exec();
    }
}

