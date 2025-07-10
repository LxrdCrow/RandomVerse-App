// event model building

import { faker } from '@faker-js/faker';

export interface Event {
  title: string;
  description: string;
  date: Date;
  location: string;
  participants: string[];
  type: string; // e.g., 'festival', 'battle', 'disaster', 'discovery'
  significance: string; // e.g., 'minor', 'major', 'catastrophic'
}

export class EventModel {
  generateEvent(): Event {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      date: faker.date.past(),
      location: faker.location.city(),
      participants: faker.helpers.arrayElements([faker.person.fullName(), faker.person.fullName(), faker.person.fullName()], 2),
      type: faker.helpers.arrayElement(['festival', 'battle', 'disaster', 'discovery', 'political event', 'cultural event', 'scientific breakthrough', 'natural phenomenon']),
      significance: faker.helpers.arrayElement(['minor', 'major', 'catastrophic', 'transformative', 'legendary']),
    };
  }

    generateEvents(count: number): Event[] {
        return Array.from({ length: count }, () => this.generateEvent());
    }
}