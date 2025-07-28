import mongoose, { Document, Schema } from 'mongoose';
import { faker } from '@faker-js/faker';

export interface IQuest extends Document {
  title: string;
  description: string;
  location: string;
  objective: string;
  reward: string;
  difficulty: 'Human' | 'Normal' | 'Challenge' | 'Bloody' | 'Eternal';
  duration: number;         // in days
  questGiver: string;
  participants: string[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

const QuestSchema = new Schema<IQuest>({
  title:        { type: String, required: true },
  description:  String,
  location:     String,
  objective:    String,
  reward:       String,
  difficulty:   { type: String, enum: ['Human','Normal','Challenge','Bloody','Eternal'] },
  duration:     Number,
  questGiver:   String,
  participants: [String],
  status:       { type: String, enum: ['pending','in-progress','completed','failed'], default: 'pending' },
}, {
  timestamps: true
});

export const QuestModel = mongoose.model<IQuest>('Quest', QuestSchema);

export interface IGeneratedQuest {
  title: string;
  description: string;
  location: string;
  objective: string;
  reward: string;
  difficulty: 'Human' | 'Normal' | 'Challenge' | 'Bloody' | 'Eternal';
  duration: number;
  questGiver: string;
  participants: string[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
}

export class QuestGenerator {
  static generate(): IGeneratedQuest {
    return {
      title:        faker.lorem.sentence(),
      description:  faker.lorem.paragraph(),
      location:     faker.location.city(),
      objective:    faker.lorem.sentence(),
      reward:       faker.commerce.productName(),
      difficulty:   faker.helpers.arrayElement(['Human','Normal','Challenge','Bloody','Eternal']),
      duration:     faker.number.int({ min: 1, max: 30 }),
      questGiver:   faker.person.fullName(),
      participants: faker.helpers.arrayElements(
        [faker.person.fullName(), faker.person.fullName(), faker.person.fullName()],
        2
      ),
      status:       faker.helpers.arrayElement(['pending','in-progress','completed','failed']),
    };
  }

  static generateMany(count: number): IGeneratedQuest[] {
    return Array.from({ length: count }, () => QuestGenerator.generate());
  }
}
