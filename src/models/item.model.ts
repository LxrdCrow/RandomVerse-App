// item building model

import { faker } from '@faker-js/faker';

export interface Item {
  name: string;
  type: string;
  description: string;
  rarity: string;
  weight: number;
  value: number;
  material: string;
  enchantments: string[];
  properties: string[];
}

export class ItemModel {
  generateItem(): Item {
    return {
      name: faker.commerce.productName(),
      type: faker.helpers.arrayElement(['Weapon', 'Armor', 'Potion', 'Scroll', 'Ring', 'Amulet', 'Artifact', 'Tool', 'Consumable', 'Gem', 'Clothing', 'Food', 'Drink', 'Miscellaneous']),
      description: faker.lorem.sentence(),
      rarity: faker.helpers.arrayElement(['Common', 'Uncommon', 'Unusual', 'Mistical', 'Ecceptional', 'Legendary', 'Divine']),
      weight: faker.number.float({ min: 0.1, max: 100, fractionDigits: 1 }),
      value: faker.number.int({ min: 1, max: 10000 }),
      material: faker.helpers.arrayElement(['Iron', 'Steel', 'Leather', 'Cloth', 'Wood', 'Gold', 'Silver', 'Mithril', 'Adamantine', 'Obsidian', 'Crystal', 'Bone', 'Glass', 'Ceramic']),
      enchantments: faker.helpers.arrayElements(['Flaming', 'Frost', 'Shock', 'Poisoned', 'Holy', 'Unholy', 'Curse', 'Blessed'], 2),
      properties: faker.helpers.arrayElements(['Lightweight', 'Durable', 'Sharp', 'Flexible', 'Heavy', 'Poisonous'], 2),
    };
  }

    generateItems(count: number): Item[] {
        return Array.from({ length: count }, () => this.generateItem());
    }
}