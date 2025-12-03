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

// COLORS mapping = {
//   0: "Rot",
//   1: "Gelb",
//   2: "Grün",
//   3: "Blau",
//   4: "Schwarz"
// }

// "color_scores": <colorId, points> {
//   "0": 10,
//    "1": 5,
//     "2": 8,
//     "3": 12,
//     "4": 2
// },
// "player_village_tokens": <playerId, villagePoints> {
//   "0": 1,
//   "1": 0,
//   "2": 1
// },

// "current_epoch": 2,
// "villages_founded_in_epoch": 1,
// "current_player_id": 0,
// "player_secret_clans": <playerId, colorId> {
//   "0": 3,
//   "1": 1,
//   "2": 4
// }

// "num_players": 3,
//   "board": Array<Array<colorId -> amountColorHuts:number >> [
//     [
//       0,
//       0,
//       0,
//       0,
//       1
//     ],

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
