<script setup lang="ts">
import LoadingBar from '@/components/LoadingBar.vue'
import router from '@/router'
// import useAssets from '@/use/useAssets.ts'
import useMatch from '@/use/useMatch.ts'
import useUser from '@/use/useUser.ts'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import OptionsModal from '@/components/molecules/OptionsModal.vue'
import XButton from '@/components/atoms/XButton.vue'
import { useRoute } from 'vue-router'

const { isStartingGame, isOptionsModalOpen } = useMatch()
const route = useRoute()
G.route = ref(route)

const { t } = useI18n()
const isNative = import.meta.env.VITE_PLATTFORM === 'native'

const startGame = () => {
  isStartingGame.value = true
  router.push({ name: 'game', query: { ...route.query /*, test: 'arena'*/ } })
}

const onExit = () => {
  console.log('exit game')
}

// const { preloadAssets, loadingProgress } = useAssets()

onMounted(() => {
  // preloadAssets()
})
onUnmounted(() => {})
</script>

<template lang="pug">
  div.fixed.top-0.left-0.w-full.h-full.relative
    img.bg-img.absolute.top-0.left-0.bg-repeat-x.bg-contain(class="z-[-20]" src="/images/bg/bg.jpg" alt="Main Menu Background")
    //img.absolute.top-0.left-0.ml-2.mt-2(class="w-[20%] z-[10]" src="/images/logo/logo_256x256.webp" alt="Logo")
    div.flex.w-full.my-3.mt-1(class="translate-y-[-50%] absolute top-1/2")
      div.mx-auto
        div.flex.justify-center
          XButton.with-bg.mt-3(
            class="leading-[1rem]"
            @click="startGame"
            @keydown.enter="startGame"
          ) {{ t('startGame') }}

        div.flex.justify-center
          XButton.with-bg.mt-3(
            class="leading-[1rem]"
            @click="() => (isOptionsModalOpen = true)"
            @keydown.enter="startGame"
          ) {{ t('options') }}

        div.flex.justify-center(v-if="isNative")
          XButton.with-bg.mt-3(
            class="leading-[1rem]"
            @click="onExit"
            @keydown.enter="startGame"
          ) {{ t('quit') }}
    //LoadingBar
</template>

<style lang="sass">
.bg-img
  background-color: #050505
  background-image: url('/images/bg/jgj-main-menu_655x320.jpg')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  height: 100%
  z-index: -1
</style>
<i18n>
en:
  startGame: "Start Game"
  options: "Options"
  quit: "Quit game"
de:
  startGame: "Spiel Starten"
  options: "Einstellungen"
  quit: "Spiel beenden"
</i18n>
