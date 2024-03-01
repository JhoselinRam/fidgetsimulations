import { useDragAndDrop } from "react-aria-components"
import type {
  CollectionOrder,
  MainState,
  MainStateAction
} from "../../../useMainState/useMainState_types"
import type { UseListReorder } from "./useListReorder_types"
import type { Dispatch } from "react"

function useListReorder(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): UseListReorder {
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        const index = getIndexById(key as string)

        return {
          "text/plain": state.order[index].id
        }
      }),

    onReorder: (e) => {
      const targetIndex = getIndexById(e.target.key as string)
      const movingIndex = getIndexById([...e.keys][0] as string)
      const listOrder = state.order.slice().reverse()
      let newOrder: CollectionOrder[] = []

      if (e.target.dropPosition === "before") {
        newOrder = moveBefore(listOrder, targetIndex, movingIndex)
      } else if (e.target.dropPosition === "after") {
        newOrder = moveAfter(listOrder, targetIndex, movingIndex)
      }

      dispatch({
        type: "collection@reorder",
        payload: {
          order: newOrder.reverse()
        }
      })
    }
  })

  // --------------------------------------------------------
  // --------------------------------------------------------

  function getIndexById(id: string): number {
    return state.order
      .slice()
      .reverse()
      .findIndex((collection) => collection.id === id)
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  function moveBefore(
    source: CollectionOrder[],
    target: number,
    moving: number
  ): CollectionOrder[] {
    const subArray1 = source.slice(0, target)
    const subArray2 = source.slice(target, moving)
    const subArray3 = [source[moving]]
    const subArray4 = source.slice(moving + 1)

    console.dir(subArray1)
    console.dir(subArray2)
    console.dir(subArray3)
    console.dir(subArray4)

    return [...subArray1, ...subArray3, ...subArray2, ...subArray4]
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  function moveAfter(
    source: CollectionOrder[],
    target: number,
    moving: number
  ): CollectionOrder[] {
    const subArray1 = source.slice(0, moving)
    const subArray2 = [source[moving]]
    const subArray3 = source.slice(moving + 1, target + 1)
    const subArray4 = source.slice(target + 1)

    return [...subArray1, ...subArray3, ...subArray2, ...subArray4]
  }

  // --------------------------------------------------------
  // --------------------------------------------------------

  return {
    dragAndDropHooks
  }
}

export default useListReorder
