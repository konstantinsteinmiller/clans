import { ref } from 'vue'
import type { Ref } from 'vue'
import useServer from '@/use/useServer'

import { animateEnemyMovement } from '@/utils/helper'
let nextTurnFunc: any = null
const draggedElement: Ref<any> = ref(null)
const server = useServer()

const useField = (nextTurn: any = null) => {
  nextTurnFunc = nextTurn || nextTurnFunc

  /**
   * @returns {Unit | undefined} - unit object if found on the field
   */
  const findUnitOnFieldPosition = (fieldIndex: number): any | undefined => {
    // return allUnitsList.value.find(unit => unit.position === fieldIndex)
  }

  const highlightAllowedFields: any = (draggedUnit: Unit | any, isHighlight = true) => {
    let highlightableFieldsList: any
  }

  const isMoveAllowed = (fieldIndex: number): boolean => {
    if (!draggedElement.value || draggedElement.value?.position === undefined) {
      return false
    }

    const isAllowed: boolean = false

    return isAllowed
  }

  const findUnitParent = (currentNode: any) => {
    return currentNode?.classList?.contains('unit') ? currentNode : currentNode?.parentNode
  }

  const onDropUnit = (fieldIndex: number, resetPositionCallback: any) => {
    if (isMoveAllowed(fieldIndex)) {
      const dropFieldIndex = fieldIndex

      /* finally drop unit and give resources and change turns */
      dropUnit(draggedElement, dropFieldIndex)
      nextTurnFunc()
    }

    draggedElement.value = null
  }

  const dropUnit = (draggedElement: Ref<any | null>, fieldIndex: number): void => {}

  const onFieldEnter = (fieldIndex: number) => {
    if (draggedElement?.value) {
    }
  }

  return {
    onDropUnit,
    onFieldEnter,
    draggedElement: draggedElement,
    findUnitOnFieldPosition,
    highlightAllowedFields,
    isMoveAllowed,
    findUnitParent,
    animateEnemyMovement,
    nextTurnFunc,
  }
}
export default useField
