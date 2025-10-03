<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import GameOverScreen from '@/components/GameOverScreen.vue'

import useMatch from '@/use/useMatch.ts'
import useInput from '@/use/useInput'
import { GAME_HEIGHT, GAME_WIDTH } from '@/utils/constants.ts'
import Score from '@/components/atoms/Score.vue'

// Match State
const { isGameOver, setIsGameOver, restartGame } = useMatch()
const isGameRunning: Ref<boolean> = ref(true)

const { cleanup } = useInput()

// Game Loop Update Function
const updateGame = (deltaTime: number) => {
  if (isGameOver.value) {
    isGameRunning.value = false
    return
  }

  // timePlayed.value += deltaTime

  // G.obstaclesDodgedTotal.value = obstaclesDodgedTotal
  // G.enemiesDodgedTotal.value = enemiesDodgedTotal
  // G.timePlayed.value = timePlayed.value
  // G.speed.value = speed.value
}

const resetGameState = () => {
  cleanup()
  // timePlayed.value = 0
  isGameRunning.value = true

  useInput()
}

// Handle Restart Game from GameOverScreen
const onRestartGame = () => {
  setTimeout(() => {
    resetGameState()
    restartGame()
  })
}

onMounted(() => {})

onUnmounted(() => {
  cleanup()
})
</script>

<template lang="pug">
  .game-container.relative.overflow-hidden(:style="{ width: `${GAME_WIDTH}px`, height: `${GAME_HEIGHT}px` }")
    GameOverScreen(v-if="isGameOver" @restart="onRestartGame")

    .absolute.top-4.left-4.text-white.text-sm.z-50
    Score
</template>

<style scoped lang="sass">
.game-container
  margin: 0 auto
</style>
