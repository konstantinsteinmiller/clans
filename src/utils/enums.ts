// import type { ENUM } from '@/types'

// export const MENU: ENUM = {
//   MAP: 'map',
//   COLLECTION: 'collection',
//   ITEMS: 'items',
//   FAIRY: 'fairy',
//   ATTACK_SPELLS: 'attackSpells',
//   PASSIVE_SPELLS: 'passiveSpells',
// }
// export type MenuItem = (typeof MENU)[keyof typeof MENU]

import type { ENUM } from '@/types'

export const COLORS: ENUM = {
  YELLOW: 'yellow',
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  BLACK: 'black',
}

export const LAND: ENUM = {
  FOREST: 'forest',
  DESERT: 'desert',
  MOUNTAIN: 'mountain',
  PLAIN: 'plain',
}

export const ENEMY_TYPES: { [s: string]: { width: number; height: number } } = {
  1: {
    width: 48,
    height: 48,
  },
  2: {
    width: 36,
    height: 36,
  },
  3: {
    width: 64,
    height: 64,
  },
  4: {
    width: 28,
    height: 28,
  },
  5: {
    width: 44,
    height: 44,
  },
}
export type EnemyType = (typeof ENEMY_TYPES)[keyof typeof ENEMY_TYPES]

export const OBSTACLE_TYPES: { [s: string]: { width: number; height: number } } = {
  1: {
    width: 64,
    height: 112,
  },
  2: {
    width: 54,
    height: 134,
  },
}
export const TOTAL_OBSTACLES_TYPES = Object.keys(OBSTACLE_TYPES).length

export const LANGUAGES: Array<string> = [
  // 'ar',
  // 'cs',
  // 'da',
  'de',
  // 'el',
  'en',
  // 'es',
  // 'fi',
  // 'fr',
  // 'it',
  // 'jp',
  // 'kr',
  // 'ms',
  // 'nl',
  // 'pl',
  // 'pt',
  // 'ru',
  // 'sv',
  // 'zh',
]
