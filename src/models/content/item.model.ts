// src/models/content/item.model.ts

import mongoose, { Document, Schema } from 'mongoose';
import { faker } from '@faker-js/faker';

/** Interfaccia per il documento Mongoose */
export interface IItem extends Document {
  name: string;
  type: string;
  description: string;
  rarity: string;
  weight: number;
  value: number;
  material: string;
  enchantments: string[];
  properties: string[];
  createdAt: Date;
  updatedAt: Date;
}

/** Schema Mongoose */
const ItemSchema = new Schema<IItem>({
  name:         { type: String, required: true },
  type:         String,
  description:  String,
  rarity:       String,
  weight:       Number,
  value:        Number,
  material:     String,
  enchantments: [String],
  properties:   [String],
}, { timestamps: true });

export const ItemModel = mongoose.model<IItem>('Item', ItemSchema);

/** Interfaccia per i dati “grezzi” generati da Faker */
export interface IGeneratedItem {
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

/** Classe per generare item fittizi */
export class ItemGenerator {
  static generate(): IGeneratedItem {
    return {
      name: faker.commerce.productName(),
      type: faker.helpers.arrayElement([
        'Weapon','Armor','Potion','Scroll','Ring','Amulet',
        'Artifact','Tool','Consumable','Gem','Clothing','Food','Drink','Miscellaneous'
      ]),
      description: faker.lorem.sentence(),
      rarity: faker.helpers.arrayElement([
        'Common','Uncommon','Unusual','Mystical','Exceptional','Legendary','Divine'
      ]),
      weight: faker.number.float({ min: 0.1, max: 100, fractionDigits: 1 }),
      value: faker.number.int({ min: 1, max: 10000 }),
      material: faker.helpers.arrayElement([
        'Iron','Steel','Leather','Cloth','Wood','Gold','Silver',
        'Mithril','Adamantine','Obsidian','Crystal','Bone','Glass','Ceramic'
      ]),
      enchantments: faker.helpers.arrayElements(
        ['Flaming','Frost','Shock','Poisoned','Holy','Unholy','Curse','Blessed'],
        faker.number.int({ min: 0, max: 3 })
      ),
      properties: faker.helpers.arrayElements(
        ['Lightweight','Durable','Sharp','Flexible','Heavy','Poisonous'],
        faker.number.int({ min: 0, max: 3 })
      ),
    };
  }

  static generateMany(count: number): IGeneratedItem[] {
    return Array.from({ length: count }, () => ItemGenerator.generate());
  }
}
