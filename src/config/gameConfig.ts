export const GAME_CONFIG = {
    seed: {
        defaultRegions: 5,
        defaultCreaturesPerRegion: 8,
        defaultCharacters: 20,
    },
    limits: {
        maxCreaturesPerRegion: 200,
        maxItemsPerCharacter: 50,
    },
    probabilities: {
        magicPresence: 0.5, 
        rareItem: 0.05,
        portalSpawn: 0.03
    },
    techLevels: ['ancient','medieval','steampunk','futuristic', 'post-apocalyptic'] as const,
    climates: ['tropical','arid','temperate','cold','continental'] as const,
}   as const;