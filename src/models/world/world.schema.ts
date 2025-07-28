// src/models/world.schema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IWorld extends Document {
  name: string;
  description: string;
  location: string;
  population: number;
  culture: string;
  religion: string;
  language: string;
  government: string;
  economy: string;
  climate: string;
  terrain: string;
  races: string[];
  notableEvents: string[];
  foundingYear: number;
  technologyLevel: string;
  magicPresence: boolean;
  factions: string[];
  capitalCity: string;
  ruler: string;
  laws: { title: string; text: string }[];
  history: { title: string; text: string }[];
  mythology: { title: string; text: string }[];
  resources: string[];
  conflicts: { title: string; text: string }[];
  alliances: string[];
  alignments: string[];
  pantheon: string[];
  portals: string[];
  influentialGuilds: string[];
  creatures: string[];
}

const WorldSchema = new Schema<IWorld>({
  name: { type: String, required: true },
  description: String,
  location: String,
  population: Number,
  culture: String,
  religion: String,
  language: String,
  government: String,
  economy: String,
  climate: String,
  terrain: String,
  races: [String],
  notableEvents: [String],
  foundingYear: Number,
  technologyLevel: String,
  magicPresence: Boolean,
  factions: [String],
  capitalCity: String,
  ruler: String,
  laws: [{ title: String, text: String }],
  history: [{ title: String, text: String }],
  mythology: [{ title: String, text: String }],
  resources: [String],
  conflicts: [{ title: String, text: String }],
  alliances: [String],
  alignments: [String],
  pantheon: [String],
  portals: [String],
  influentialGuilds: [String],
  creatures: [String]
}, {
  timestamps: true
});

export const WorldModel = mongoose.model<IWorld>('World', WorldSchema);
