// src/models/character/character.generator.ts
import { faker } from '@faker-js/faker';

export interface IGeneratedCharacter {
  name: string;
  age: number;
  gender: string;
  race: string;
  class: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  level: number;
  rating: string;
  weapon: string;
  armor: string;
  skills: string[];
}

export class CharacterGenerator {
  static generate(): IGeneratedCharacter {
    return {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18 }),
      gender: faker.person.gender(),
      race: faker.word.words(1),
      class: faker.word.words(1),
      strength: faker.number.int({ min: 1, max: 50 }),
      dexterity: faker.number.int({ min: 1, max: 50 }),
      constitution: faker.number.int({ min: 1, max: 50 }),
      intelligence: faker.number.int({ min: 1, max: 50 }),
      wisdom: faker.number.int({ min: 1, max: 50 }),
      charisma: faker.number.int({ min: 1, max: 50 }),
      level: faker.number.int({ min: 1, max: 50 }),
      rating: faker.helpers.arrayElement(['E','D','C','B','A','S','SS','SSS','Monarch']),
      weapon: faker.helpers.arrayElement(['Sword','Bow','Staff','Dagger','Axe','Mace','Spear','Crossbow','Wand','Hammer','Lance','Laser Gun']),
      armor: faker.helpers.arrayElement(['Leather Armor','Chainmail','Plate Armor','Robes','Cloak','Shield','Helmet','Gauntlets','Boots','Bracers']),
      skills: faker.helpers.arrayElements(
        ['Magic','Stealth','Archery','Swordsmanship','Alchemy','Healing','Lockpicking','Persuasion','Survival','Crafting','Cooking','Navigation'],
        faker.number.int({ min: 1, max: 5 })
      ),
    };
  }

  static generateMany(count: number): IGeneratedCharacter[] {
    return Array.from({ length: count }, () => CharacterGenerator.generate());
  }
}
