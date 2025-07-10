// quest model building

import { faker } from '@faker-js/faker';

export interface Quest {
  title: string;
  description: string;
  location: string;
  objective: string;
  reward: string;
  difficulty: string;
  duration: number; // duration in days
  questGiver: string;
  participants: string[];
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
}

export class QuestModel {
  generateQuest(): Quest {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      location: faker.location.city(),
      objective: faker.lorem.sentence(),
      reward: faker.commerce.productName(),
      difficulty: faker.helpers.arrayElement(['Human', 'Normal', 'Challenge', 'Bloody', 'Eternal']),
      duration: faker.number.int({ min: 1, max: 30 }), // duration in days
      questGiver: faker.person.fullName(),
      participants: faker.helpers.arrayElements([faker.person.fullName(), faker.person.fullName(), faker.person.fullName()], 2),
      status: faker.helpers.arrayElement(['pending', 'in-progress', 'completed', 'failed']),
    };
  }

    generateQuests(count: number): Quest[] {
        return Array.from({ length: count }, () => this.generateQuest());
    }
}