import useField from '@/use/useField'
import { ref } from 'vue'
import type { Ref } from 'vue'
import useScroll from '@/use/useScroll'
import { UNIT_POSITION_DEAD } from '@/utils/constants.ts'

const { disableScroll, enableScroll } = useScroll()

const { highlightAllowedFields, isMoveAllowed, draggedElement, onDropUnit } = useField()

const originPosition = ref({ x: 0, y: 0 })

const offset = ref({ x: 0, y: 0 })

let dropFieldIndex = UNIT_POSITION_DEAD
let originIndex = UNIT_POSITION_DEAD

const useDrag = (position: any, touchFieldPosition: any = { x: 0, y: 0 }) => {
  const isDragging: Ref<boolean> = ref(false)
  let dragElement: any = null
  let resetPosition = () => {}

  const startDrag = (evt: MouseEvent) => {
    disableScroll()
    const unit: any = null
    const currentNode = null //TODO

    const possibleFieldIndex = +currentNode?.dataset?.value
    if (Number.isInteger(possibleFieldIndex) && !Number.isNaN(possibleFieldIndex)) {
      const unitUuid = currentNode?.dataset.unitUuid
      const teamUuid = currentNode?.dataset.teamUuid
      const findUnitFromTeam = (team: Team) => {
        return team?.unitsList?.find((unit: Unit) => {
          return unit.unit.unitUuid === unitUuid || unit.position === possibleFieldIndex
        })
      }
      originIndex = possibleFieldIndex
      // unit = findUnitFromTeam(game.playerTeam.teamUuid === teamUuid ? game.playerTeam : game.enemyTeam)
    }

    evt.preventDefault()

    /* save position from before the drag to being able to reset it */
    originPosition.value = {
      ...position.value,
    }
    resetPosition = () => {
      position.value = { ...originPosition.value }
    }

    dragElement = currentNode
    offset.value.x = evt.clientX - originPosition.value.x
    offset.value.y = evt.clientY - originPosition.value.y

    isDragging.value = true
    evt.stopPropagation()
    draggedElement.value = unit

    highlightAllowedFields(draggedElement, true)
  }

  const onDragMove = (event: any) => {
    // If not isDragging, return early
    if (!isDragging.value) {
      return
    }
    event.preventDefault()
    // Update the position of the element
    position.value = {
      x: event.clientX - offset.value.x,
      y: event.clientY - offset.value.y,
    }
    touchFieldPosition.value = {
      x: event.pageX - offset.value.x - originPosition.value.x,
      y: event.pageY - offset.value.y - originPosition.value.y,
    }
    dragTouchEnter(event, event.clientX, event.clientY)
  }

  function dragTouchEnter(e: any, touchX: number, touchY: number) {
    const overlappedFieldIndicesList: any[] = []
    const fieldsList = document.getElementsByClassName('game-fields-map__field')
    Array.from(fieldsList).some((field, index) => {
      const dz = field.getBoundingClientRect() //dropzone

      const isOverlap = !(dz.right < touchX || dz.left > touchX || dz.bottom < touchY || dz.top > touchY)
      if (isOverlap) {
        const distanceX = Math.abs(dz.left + dz.width / 2 - touchX)
        const distanceY = Math.abs(dz.top + dz.height / 2 - touchY)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        overlappedFieldIndicesList.push({ index, distance: distance })
      }
    })
    const closestField = overlappedFieldIndicesList.sort((a, b) => {
      if (a.distance < b.distance) {
        return -1
      }
      if (b.distance < a.distance) {
        return 1
      }
      return 0
    })
    const closestFieldIndex = closestField[0]?.index

    // setPlaceholderUnit({
    //   draggedUnit: draggedElement,
    //   fieldIndex: closestFieldIndex,
    //   dottedType: isMoveAllowed(closestFieldIndex) ? 'green' : 'red',
    // })
    dropFieldIndex = closestFieldIndex ?? 99
  }

  const endDrag = () => {
    // If not isDragging, return early
    if (!isDragging.value) {
      return
    }
    // Set isDragging state to false when the touch ends
    isDragging.value = false
    // setPlaceholderUnit({
    //   draggedUnit: draggedElement,
    //   fieldIndex: UNIT_FIELD_PLACE_HELPER,
    // })
    highlightAllowedFields(null, false)

    if (dropFieldIndex === UNIT_POSITION_DEAD) {
      dropFieldIndex = originIndex
      resetPosition()
    } else {
      onDropUnit(dropFieldIndex ?? 99, resetPosition)
    }
    enableScroll()
  }

  return {
    startDrag,
    onDragMove,
    endDrag,
    isDragging,
    dragElement,
  }
}
export default useDrag
