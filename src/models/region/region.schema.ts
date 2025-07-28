// src/models/region/region.schema.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IRegion extends Document {
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
  laws: string[];
  history: string[];
  mythology: string[];
  resources: string[];
  conflicts: string[];
  alliances: string[];
  alignments: string[];
  pantheon: string[];
  portals: string[];
  createdAt: Date;
  updatedAt: Date;
}

const RegionSchema = new Schema<IRegion>({
  name:         { type: String, required: true },
  description:  String,
  location:     String,
  population:   Number,
  culture:      String,
  religion:     String,
  language:     String,
  government:   String,
  economy:      String,
  climate:      String,
  terrain:      String,
  races:        [String],
  notableEvents:[String],
  foundingYear: Number,
  technologyLevel: String,
  magicPresence: Boolean,
  factions:     [String],
  capitalCity:  String,
  ruler:        String,
  laws:         [String],
  history:      [String],
  mythology:    [String],
  resources:    [String],
  conflicts:    [String],
  alliances:    [String],
  alignments:   [String],
  pantheon:     [String],
  portals:      [String]
}, {
  timestamps: true
});

export const RegionModel = mongoose.model<IRegion>('Region', RegionSchema);
