// world building model

import { faker } from '@faker-js/faker';

export interface World {
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
  influentialGuilds: string[];
  Creatures: string[];
}

export class WorldModel {
  generateWorld(): World {
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
      technologyLevel: faker.helpers.arrayElement(['medieval', 'steampunk', 'futuristic', 'post-apocalyptic', 'ancient']),
      magicPresence: faker.datatype.boolean(),
      factions: faker.helpers.arrayElements([
        'The Crimson Guard',
        'The Guild of the Weeping Monarch',
        'Order of the Obscuritas',
        'Academy of the Fourth Circle',
        'Brotherhood of the Eternal Flame',
        'The Shadow Syndicate',
        'The Arcane Conclave',
        'The Celestial Order',
        'The Iron Pact',
        'The Silver Covenant',
        'The Obsidian Circle',
        'The Emerald Enclave',
      ], 2), 
      capitalCity: faker.location.city(),
      ruler: faker.person.fullName(),
      laws: [faker.lorem.sentence(), faker.lorem.sentence()],
      history: [faker.lorem.sentence(), faker.lorem.sentence()],
      mythology: [faker.lorem.sentence(), faker.lorem.sentence()],
      resources: faker.helpers.arrayElements(['Gold', 'Mana Crystals', 'Iron', 'Obsidian', 'Water Essence', 'Fire Essence', 'Air Essence', 'Earth Essence'], 3), 
      conflicts: [faker.lorem.sentence(), faker.lorem.sentence()],
      alliances: faker.helpers.arrayElements(['Tribe of the Sun', 'Order of Shadows', 'Empire of Ashes', 'Guild of the Marks', 'Clan of the Void',
        'Association of the Quill', 'Faction of the Moon', 'Guild of the Stars', 'Clan of the Three Eyes', 'Brotherhood of the Assassins'], 2), 
      alignments: faker.helpers.arrayElements(['good', 'neutral', 'evil'], 1),
      pantheon: faker.helpers.arrayElements(['Nytheros', 'Eilun', 'Ahriman', 'Malekai', 'Matariel', 'Kokabiel', 'Death', 'Lumine', 'Arkoth', 'Armastia', 'The Ancients of Magic', 'The First Darkness'], 2), 
      portals: faker.helpers.arrayElements(['Moon Gate', 'Oblivion Rift', 'Astral Doorway', 'Netherworld Gate', 'Cosmic Nexus', 'Interdimensional Portal', 'Paradise Gate', 'Chasm of the Void',
        'Gateway of the Ancients', 'Celestial Bridge', 'Realm of the Dead', 'Gate of the Stars', 'Gate of the Sun', 'Gate of the Moon', 'Gate of the Earth', 'Gate of the Void', 'Gate of the Abyss',
        'Gate of the Elements', 'Gate of the Spirits', 'Gate of the Titans'] , 3),
      influentialGuilds: faker.helpers.arrayElements(['Silver Blades', 'Whispering Quill', 'Circle of Thorns', 'Pride of the Stars', 'Claw of the Moon',
        'Sword of light and shadow', 'Sword of the Sun', 'Sword of the Stars'], 2), 
      Creatures: faker.helpers.arrayElements(['Phoenix', 'Leviathan', 'Void Dragon', 'Celestial Stag', 'Nightmare Beast', 'Ethereal Serpent', 'Titan of the Earth', 'Storm Giant',
        'Frost Wyrm', 'Demon', 'Shadow Beast', 'Celestial Dragon', 'Kraken', 'Melether', 'Giant Spider', 'Hydra', 'Gargoyle', 'Necrophage', 'Angel',
        'Elemental Dragon', 'Luminos Dragon', 'Abyssal Dragon'], 2) 
    };
  }

  generateWorlds(count: number): World[] {
    return Array.from({ length: count }, () => this.generateWorld());
  }
}




