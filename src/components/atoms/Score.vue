<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  position?: string
}>()

const score = computed(() => {
  return (
    G.obstaclesDodgedTotal.value * 2 +
    G.enemiesDodgedTotal.value +
    Math.floor((G.timePlayed.value / 1000) * G.speed.value)
  )
})
</script>

<template lang="pug">
  div.flex.items-center.justify-center(
    class="z-[100]"
    :class="{ 'absolute top-2 right-2': position !== 'relative' }"
  )
    div.bangers.text-2xl.text-white.font-bold
      //span.score {{ $t('score') }}: {{ score }}
</template>

<style scoped lang="sass"></style>
