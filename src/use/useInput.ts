import { usePlayer } from '@/use/usePlayer.ts'
import useMatch from '@/use/useMatch.ts'

const { startFlying, stopFlying } = usePlayer()
const { isGameOver } = useMatch()

// const onLongTouch = () => {
//   startFlying()
//   console.log('onLongTouch')
// }

// let timer
// const touchDuration = 200 //length of time we want the user to touch before we do something

const touchstart = (e: TouchEvent) => {
  if (isGameOver.value) return // Prevent input if game is over
  e.preventDefault() // Crucial to prevent browser gestures
  startFlying()

  // if (!timer) {
  // timer = setInterval(onLongTouch, touchDuration, 16.66)
  // }
}

const touchend = (e: TouchEvent) => {
  //stops short touches from firing the event
  // if (timer) {
  if (isGameOver.value) return
  e.preventDefault() // Still prevent default
  stopFlying()
  // clearTimeout(timer)
  //   timer = null
  // }
}

// Mouse events for desktop equivalent
const onMouseDown = (e: MouseEvent) => {
  if (isGameOver.value) return
  // Only respond to left mouse button (button 0)
  if (e.button === 0) {
    e.preventDefault()
    startFlying()
  }
}

const onMouseUp = (e: MouseEvent) => {
  if (isGameOver.value) return
  if (e.button === 0) {
    e.preventDefault()
    stopFlying()
  }
}

const onContextMenu = (event: any) => {
  event.preventDefault()
}

let hasControlsAdded = false

export const useInput = () => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (isGameOver.value) return
    // Spacebar to trigger flight
    if (event.code === 'Space') {
      event.preventDefault()
      startFlying()
    }
  }
  const onKeyUp = (event: KeyboardEvent) => {
    if (isGameOver.value) return
    // Release spacebar to stop flight
    if (event.code === 'Space') {
      event.preventDefault()
      stopFlying()
    }
  }

  if (!hasControlsAdded) {
    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp, { passive: false })

    window.addEventListener('mousedown', onMouseDown, { passive: false })
    window.addEventListener('mouseup', onMouseUp, { passive: false })

    window.addEventListener('touchstart', touchstart, { passive: false })
    window.addEventListener('touchend', touchend, { passive: false })

    window.addEventListener('contextmenu', onContextMenu, false)
    hasControlsAdded = true
  }

  const cleanup = () => {
    window.removeEventListener('keydown', onKeyDown, { passive: false })
    window.removeEventListener('keyup', onKeyUp, { passive: false })

    window.removeEventListener('mousedown', onMouseDown, { passive: false })
    window.removeEventListener('mouseup', onMouseUp, { passive: false })

    window.removeEventListener('touchstart', touchstart, { passive: false })
    window.removeEventListener('touchend', touchend, { passive: false })

    window.removeEventListener('contextmenu', onContextMenu, false)
    hasControlsAdded = false
  }

  return {
    cleanup,
  }
}
export default useInput
