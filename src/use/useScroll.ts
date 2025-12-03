// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys: any = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e: any) {
  e.preventDefault()
}

function preventDefaultForScrollKeys(e: any) {
  if (keys[e.keyCode]) {
    preventDefault(e)
    return false
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true
      },
    })
  )
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

const useScroll = () => {
  // call this to Disable
  const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    window.addEventListener('drag', preventDefault, false)
    window.addEventListener('drop', preventDefault, false)
  }

  // call this to Enable
  const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.removeEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    window.removeEventListener('drag', preventDefault, false)
    window.removeEventListener('drop', preventDefault, false)
  }

  return {
    disableScroll,
    enableScroll,
  }
}

export default useScroll
