import type { Ref } from 'vue'
import { ref } from 'vue'

const useClickSelect = () => {
  const dragCellId: Ref<any> = ref(null)
  const originCell: Ref<any> = ref(null)
  const targetCell: Ref<any> = ref(null)

  const isMoveAllowed = () => {
    return true
  }

  const onClick = () => {
    if (dragCellId.value === originCell.value && originCell.value !== null) {
      dragCellId.value = null
      originCell.value = null
    } else if (originCell.value === null) {
      originCell.value = dragCellId.value
      console.log('dragElement.value, originCell.value: ', dragCellId.value, originCell.value)
    } else if (originCell.value !== null && targetCell.value === null) {
      if (isMoveAllowed(dragCellId.value)) {
      }
    }
  }

  return {
    dragCellId: dragCellId,
    onClick,
  }
}
export default useClickSelect
