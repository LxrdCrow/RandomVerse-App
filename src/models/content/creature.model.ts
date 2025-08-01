import mongoose, { Document, Schema } from 'mongoose';
import { faker } from '@faker-js/faker';

export interface ICreature extends Document {
  name: string;
  type: string;
  description: string;
  habitat: string;
  abilities: string[];
  strengths: string[];
  weaknesses: string[];
  alignment: string;
  size: string;
  diet: string;
  reproduction: string;
  lifespan: number;
  intelligenceLevel: string;
  dangerLevel: string;
  notableTraits: string[];
  createdAt: Date;
  updatedAt: Date;
}


const CreatureSchema = new Schema<ICreature>({
  name:              { type: String, required: true },
  type:              String,
  description:       String,
  habitat:           String,
  abilities:         [String],
  strengths:         [String],
  weaknesses:        [String],
  alignment:         String,
  size:              String,
  diet:              String,
  reproduction:      String,
  lifespan:          Number,
  intelligenceLevel: String,
  dangerLevel:       String,
  notableTraits:     [String],
}, { timestamps: true });

export const CreatureModel = mongoose.model<ICreature>('Creature', CreatureSchema);

export interface IGeneratedCreature {
  name: string;
  type: string;
  description: string;
  habitat: string;
  abilities: string[];
  strengths: string[];
  weaknesses: string[];
  alignment: string;
  size: string;
  diet: string;
  reproduction: string;
  lifespan: number;
  intelligenceLevel: string;
  dangerLevel: string;
  notableTraits: string[];
}

export class CreatureGenerator {
  static generate(): IGeneratedCreature {
    return {
      name: faker.animal.type(),
      type: faker.helpers.arrayElement([
        'Beast','Dragon','Undead','Elemental','Mythical','Alien','Humanoid',
        'Construct','Fey','Demonic','Celestial','Giant','Spirit','Aberration',
        'Monstrosity','Ooze','Vermin','Beastman','Shapeshifter','Hybrid'
      ]),
      description: faker.lorem.sentence(),
      habitat: faker.helpers.arrayElement(['Forest','Mountain','Desert','Ocean','Cave','Urban']),
      abilities: faker.helpers.arrayElements(
        ['Flight','Invisibility','Fire Breath','Telepathy','Regeneration','Telekinesis','Teleportation',
         'Intangibility','Ice Breath','Hypnotism','Hurricanes Creation','Immortality'],
        faker.number.int({ min: 1, max: 3 })
      ),
      strengths: faker.helpers.arrayElements(['Strong','Fast','Intelligent','Stealthy'], 2),
      weaknesses: faker.helpers.arrayElements(['Weak to Fire','Slow','Easily Distracted'], 1),
      alignment: faker.helpers.arrayElement(['Good','Neutral','Evil']),
      size: faker.helpers.arrayElement(['Tiny','Small','Medium','Large','Huge']),
      diet: faker.helpers.arrayElement(['Herbivore','Carnivore','Omnivore']),
      reproduction: faker.helpers.arrayElement(['Eggs','Live Birth']),
      lifespan: faker.number.int({ min: 1, max: 1000 }),
      intelligenceLevel: faker.helpers.arrayElement(['Animalistic','Sentient']),
      dangerLevel: faker.helpers.arrayElement([
        'Weak','Domestic','Intelligent-Not Dangerous','Intelligent-Aggressive',
        'Notorious Threat of Humanity','Death Incarnate','Legendary Beast','Divine','Multiversal Threat'
      ]),
      notableTraits: [faker.lorem.sentence(), faker.lorem.sentence()],
    };
  }

  static generateMany(count: number): IGeneratedCreature[] {
    return Array.from({ length: count }, () => CreatureGenerator.generate());
  }
}
