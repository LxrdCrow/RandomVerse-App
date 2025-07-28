// src/models/world.generator.ts
import { faker } from '@faker-js/faker';

// Define a plain TypeScript interface for generated world objects
export interface IGeneratedWorld {
  name: string;
  description: string;
  location: string;
  population: number;
  culture: string;
  religion: string;
  language: string;
  government: string;
  economy: string;
  climate: 'tropical' | 'arid' | 'temperate' | 'cold' | 'continental';
  terrain: string;
  races: string[];
  notableEvents: string[];
  foundingYear: number;
  technologyLevel: 'medieval' | 'steampunk' | 'futuristic' | 'post-apocalyptic' | 'ancient';
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

export class WorldGenerator {
  static generate(): IGeneratedWorld {
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
      terrain: faker.helpers.arrayElement(['mountains','forest','desert','plains','swamp','coastal','urban']),
      races: faker.helpers.arrayElements(['Humans','Elves','Dwarves','Demons','Draconi'], 2),
      notableEvents: [faker.lorem.sentence(), faker.lorem.sentence()],
      foundingYear: faker.number.int({ min: 0, max: 3000 }),
      technologyLevel: faker.helpers.arrayElement(['medieval','steampunk','futuristic','post-apocalyptic','ancient']),
      magicPresence: faker.datatype.boolean(),
      factions: faker.helpers.arrayElements([
        'The Crimson Guard','Order of the Moon','Shadow Syndicate','Arcane Conclave'
      ], 2),
      capitalCity: faker.location.city(),
      ruler: faker.person.fullName(),
      laws: [
        { title: faker.lorem.words(3), text: faker.lorem.sentence() },
        { title: faker.lorem.words(3), text: faker.lorem.sentence() }
      ],
      history: [
        { title: faker.lorem.words(3), text: faker.lorem.sentence() },
        { title: faker.lorem.words(3), text: faker.lorem.sentence() }
      ],
      mythology: [
        { title: faker.lorem.words(3), text: faker.lorem.sentence() },
        { title: faker.lorem.words(3), text: faker.lorem.sentence() }
      ],
      resources: faker.helpers.arrayElements(['Gold','Iron','Obsidian','Water Essence'], 3),
      conflicts: [
        { title: faker.lorem.words(3), text: faker.lorem.sentence() },
        { title: faker.lorem.words(3), text: faker.lorem.sentence() }
      ],
      alliances: faker.helpers.arrayElements(['Tribe of the Sun','Order of Shadows'], 2),
      alignments: faker.helpers.arrayElements(['good','neutral','evil'], 1),
      pantheon: faker.helpers.arrayElements(['Nytheros','Eilun'], 2),
      portals: faker.helpers.arrayElements(['Moon Gate','Oblivion Rift'], 1),
      influentialGuilds: faker.helpers.arrayElements(['Silver Blades','Whispering Quill'], 2),
      creatures: faker.helpers.arrayElements(['Phoenix','Leviathan'], 2)
    };
  }

  static generateMany(count: number): Array<ReturnType<typeof WorldGenerator.generate>> {
    return Array.from({ length: count }, () => WorldGenerator.generate());
  }
}
