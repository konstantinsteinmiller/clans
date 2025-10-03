import { ref } from 'vue'
import type { Ref } from 'vue'
import { COLORS, LAND } from '@/utils/enums.ts'

const isStartingGame: Ref<boolean> = ref(false)
const isGameOver: Ref<boolean> = ref(false)
// const isStartingGame: Ref<boolean> = ref(false)
// const isResizing: Ref<boolean> = ref(false)
const isSplashScreenVisible: Ref<boolean> = ref(true)
// const showSplashScreen: Ref<boolean> = ref(true)
const isDbInitialized: Ref<boolean> = ref(false)
const levelType: Ref<string> = ref('')
const isOptionsModalOpen: Ref<boolean> = ref(false)

const controls: any = ref({
  show: false,
  isLeftMouseButton: true,
  isRightMouseButton: false,
  isTap: false,
  x: '0px',
  y: '0px',
})

const useMatch = () => {
  const routes = ['/game']
  if (!isStartingGame.value && routes.some(route => window.location.hash.includes(route))) {
    // let themeQuery = ''
    // // console.log('window.location.hash: ', window.location.hash)
    // if (window.location.hash.includes('debug=')) {
    //   const queries = window.location.hash.split('?')[1]?.split('&')
    //   const includedList = ['debug']
    //   const newQueries = queries.filter(query => includedList.includes(query.split('=')[0]))
    //   themeQuery = `?${newQueries.join('&')}`
    // }
    // window.location.pathname = '/'
    // window.location.hash = `#/${themeQuery}`
    // window.location.reload()
  }

  const setIsGameOver = (value: boolean) => {
    isGameOver.value = value
  }

  const restartGame = () => {
    isGameOver.value = false
    // You might want to emit an event or call a function in GameUI to reset game state
  }

  const DEFAULT_SCORE = { [COLORS.YELLOW]: 0, [COLORS.RED]: 0, [COLORS.BLUE]: 0, [COLORS.BLACK]: 0, [COLORS.GREEN]: 0 }
  const score = ref(DEFAULT_SCORE)

  const player: Ref<number> = ref(0)
  const playersList: Ref<Array<{ color: string }>> = ref([
    { color: COLORS.YELLOW },
    { color: COLORS.RED },
    { color: COLORS.BLUE },
    { color: COLORS.BLACK },
    { color: COLORS.GREEN },
  ])

  const epoche: Ref<number> = ref(0)
  type LandType = keyof typeof LAND /* 'forest' | 'desert' | 'mountain' | 'plain' */
  type UnitCountType = Record<keyof typeof COLORS, number> //each color in colors enum
  type EpocheTypes = Record<LandType, number>

  const epochesList: Array<EpocheTypes> = [
    { forest: 1, desert: 0, mountain: -1, plain: 0 },
    { forest: 0, desert: 0, mountain: 2, plain: -1 },
    { forest: -1, desert: 3, mountain: 0, plain: 0 },
    { forest: 0, desert: -1, mountain: 0, plain: 4 },
    { forest: 5, desert: 5, mountain: 5, plain: 5 },
  ]

  const getPointsByEpoche = (unitsCount: number, landType: LandType) => {
    const selectedEpoche: EpocheTypes = epochesList[epoche.value]
    const bonus: number = selectedEpoche[landType]
    if (bonus === -1) return 0
    else return unitsCount + bonus
  }

  const DEFAULT_UNITS = { yellow: 0, red: 0, blue: 0, black: 0, green: 0 }
  const cellsList = ref<Array<{ neighbours: number[]; units: UnitCountType; type: string | LandType }>>([])

  const resetCellsList = () => {
    cellsList.value = [
      {
        neighbours: [1, 2, 3],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [0, 2, 4, 5],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [0, 1, 3, 4],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [0, 2, 4, 15],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [1, 2, 3, 5, 15, 20],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },

      {
        neighbours: [1, 4, 20, 6, 9],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [5, 9, 7],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [6, 9, 8],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [7, 9, 10, 13, 26],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [5, 6, 7, 8, 21, 25],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },

      {
        neighbours: [8, 11, 12, 13],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [10, 12, 14],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [10, 11, 13, 14],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [26, 10, 12, 14, 30],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [11, 12, 13, 30],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },

      {
        neighbours: [3, 4, 20, 16, 17],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [15, 17, 18],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [15, 16, 18, 19, 29, 35],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [16, 17, 19],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [17, 18, 38, 45, 46],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },

      {
        neighbours: [4, 5, 15, 22, 23],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [9, 22, 24, 25],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [20, 21, 23, 24],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [20, 22, 24, 17, 35],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [21, 22, 23, 28, 36],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },

      {
        neighbours: [9, 21, 26, 27, 28],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [8, 13, 25, 27, 29, 30],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [25, 26, 28, 29],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [24, 25, 27, 36, 40],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [26, 27, 31, 41],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },

      {
        neighbours: [13, 14, 26, 31, 32],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [29, 30, 32, 33, 34, 41],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [30, 31, 33],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [31, 32, 34],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [31, 33, 44, 55, 56],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },

      {
        neighbours: [17, 23, 36, 37, 38],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [24, 28, 35, 37, 39, 40],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [35, 36, 38, 39],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [19, 35, 37, 39, 46, 50],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [36, 37, 38, 43, 51],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },

      {
        neighbours: [28, 36, 41, 42, 43],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [29, 31, 40, 42, 44],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [40, 41, 43, 44],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [39, 40, 42, 44, 51],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [34, 41, 42, 43, 52, 55],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },

      {
        neighbours: [19, 46, 47, 48],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [19, 38, 45, 47, 49, 50],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
      {
        neighbours: [45, 46, 48, 49],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [45, 47, 49],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [46, 47, 48, 50],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },

      {
        neighbours: [38, 46, 49, 51, 53],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [39, 43, 50, 52, 53, 54],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [44, 51, 54, 55, 58],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [50, 51, 54],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [51, 52, 53],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },

      {
        neighbours: [34, 44, 52, 56, 57, 58],
        units: DEFAULT_UNITS,
        type: LAND.PLAIN,
      },
      {
        neighbours: [34, 55, 57, 59],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [55, 56, 58, 59],
        units: DEFAULT_UNITS,
        type: LAND.FOREST,
      },
      {
        neighbours: [52, 55, 57, 59],
        units: DEFAULT_UNITS,
        type: LAND.DESERT,
      },
      {
        neighbours: [56, 57, 58],
        units: DEFAULT_UNITS,
        type: LAND.MOUNTAIN,
      },
    ]
  }

  const resetMatch = () => {
    player.value = 0
    score.value = DEFAULT_SCORE
    epoche.value = 0
  }

  return {
    resetMatch,
    isStartingGame,
    isGameOver,
    setIsGameOver,
    restartGame,
    isSplashScreenVisible,
    isDbInitialized,
    isOptionsModalOpen,
    controls,
    levelType,
    score,
    player,
    playersList,
    getPointsByEpoche,
    cellsList,
    resetCellsList,
  }
}

export default useMatch
