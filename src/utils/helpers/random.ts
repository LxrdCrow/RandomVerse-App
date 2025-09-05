/**
 * Restituisce un numero intero casuale tra min e max (inclusi).
 */
export function getRandomInt(min: number, max: number): number {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

/**
 * Restituisce un elemento casuale da un array.
 */
export function getRandomElement<T>(arr: T[]): T {
  return arr[getRandomInt(0, arr.length - 1)];
}

/**
 * Restituisce true o false in base a una probabilità (0 → mai, 1 → sempre).
 */
export function chance(probability: number): boolean {
  return Math.random() < probability;
}

/**
 * Mescola un array usando l’algoritmo di Fisher–Yates.
 */
export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
