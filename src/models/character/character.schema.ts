import mongoose, { Document, Schema } from 'mongoose';

export interface ICharacter extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const CharacterSchema = new Schema<ICharacter>({
  name:         { type: String, required: true },
  age:          { type: Number, required: true },
  gender:       { type: String, required: true },
  race:         { type: String, required: true },
  class:        { type: String, required: true },
  strength:     Number,
  dexterity:    Number,
  constitution: Number,
  intelligence: Number,
  wisdom:       Number,
  charisma:     Number,
  level:        Number,
  rating:       String,
  weapon:       String,
  armor:        String,
  skills:       [String]
}, {
  timestamps: true
});

export const CharacterModel = mongoose.model<ICharacter>('Character', CharacterSchema);
