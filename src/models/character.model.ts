// building character model

import { faker } from '@faker-js/faker';

export interface Character {
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
  weapon: string;
  armor: string;
  skills: string[];
}

export class CharacterModel {
  generateCharacter(): Character {
    return {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 100 }),
      gender: faker.person.gender(),
      race: faker.word.words(1),
      class: faker.word.words(1),
      strength: faker.number.int({ min: 1, max: 20 }),
      dexterity: faker.number.int({ min: 1, max: 20 }),
      constitution: faker.number.int({ min: 1, max: 20 }),
      intelligence: faker.number.int({ min: 1, max: 20 }),
      wisdom: faker.number.int({ min: 1, max: 20 }),
      charisma: faker.number.int({ min: 1, max: 20 }),
      level: faker.number.int({ min: 1, max: 20 }),
      weapon: faker.helpers.arrayElement(['Sword', 'Bow', 'Staff', 'Dagger', 'Axe', 'Mace', 'Spear', 'Crossbow', 'Wand', 'Hammer', 'Lance', 'Laser Gun']),
      armor: faker.helpers.arrayElement(['Leather Armor', 'Chainmail', 'Plate Armor', 'Robes', 'Cloak', 'Shield', 'Helmet', 'Gauntlets', 'Boots', 'Bracers']),
      skills: faker.helpers.arrayElement(['Magic', 'Stealth', 'Archery', 'Swordsmanship', 'Alchemy', 'Healing', 'Lockpicking',
      'Persuasion', 'Survival', 'Crafting', 'Cooking', 'Navigation']).split(',').map(skill => skill.trim()),
    };
  }

  generateCharacters(count: number): Character[] {
    return Array.from({ length: count }, () => this.generateCharacter());
  }
}