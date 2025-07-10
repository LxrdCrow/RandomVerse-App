//region building model

import { faker } from '@faker-js/faker';

export interface Region {
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
}

export class RegionModel {
  generateRegion(): Region {
    return {
      name: faker.location.city(),
      description: faker.lorem.paragraph(),
      location: faker.location.country(),
      population: faker.number.int({ min: 1000, max: 1_000_000 }),
      culture: faker.word.words(2),
      religion: faker.word.words(2),
      language: faker.word.words(1),
      government: faker.word.words(2),
      economy: faker.word.words(2),
      climate: faker.helpers.arrayElement(['tropical', 'arid', 'temperate', 'cold', 'continental']),
      terrain: faker.helpers.arrayElement(['mountains', 'forest', 'desert', 'plains', 'swamp', 'coastal', 'urban']),
      races: faker.helpers.arrayElements(['Humans', 'Cybernetics', 'Half-Elves', 'Demons', 'Draconi', 'Giants', 'Ghouls'], 2),
      notableEvents: [faker.lorem.sentence(), faker.lorem.sentence()],
      foundingYear: faker.number.int({ min: 0, max: 3000 }),
      technologyLevel: faker.helpers.arrayElement(['medieval', 'steampunk', 'futuristic', 'post-apocalyptic', 'ancient', 'spacefaring']),
      magicPresence: faker.datatype.boolean(),
      factions: faker.helpers.arrayElements([
        'The Crimson Guard',
        'The Guild of the Weeping Monarch',
        'Order of the Moon',
        'Academy of the Fourth Circle',
        'Brotherhood of the Eternal Flame',
        'The Shadow Syndicate',
        'The Arcane Conclave',
        'The Celestial Order',
        'The Iron Pact',
        'The Silver Covenant',
        'The Obsidian Circle',
      ], 2),
      capitalCity: faker.location.city(),
      ruler: faker.person.fullName(),
      laws: [faker.lorem.sentence(), faker.lorem.sentence()],
      history: [faker.lorem.sentence(), faker.lorem.sentence()],
      mythology: [faker.lorem.sentence(), faker.lorem.sentence()],
      resources: [faker.lorem.sentence(), faker.lorem.sentence()],
      conflicts: [faker.lorem.sentence(), faker.lorem.sentence()],
      alliances: [faker.lorem.sentence(), faker.lorem.sentence()],
      alignments: [faker.lorem.sentence(), faker.lorem.sentence()],
      pantheon: [faker.lorem.sentence(), faker.lorem.sentence()],
      portals: [faker.lorem.sentence(), faker.lorem.sentence()],
    };
  }

  generateRegions(count: number): Region[] {
    return Array.from({ length: count }, () => this.generateRegion());
  }
}