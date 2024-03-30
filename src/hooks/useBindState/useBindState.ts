import { useCallback, useContext, useEffect, useState } from "react"
import type {
  CollectionOrder,
  MainStateActionType
} from "../useMainState/useMainState_types"
import type { UseBindState } from "./useBindState_types"
import { mainStateContext } from "../useMainState/useMainState"
import { toRounded } from "../../auxiliary/toRounded"

function useBindState<T>(
  item: CollectionOrder,
  value: T,
  action: MainStateActionType
): UseBindState<T> {
  const [localValue, setLocalValue] = useState(value)
  const { dispatch } = useContext(mainStateContext)

  const changeValue = useCallback(
    (value: T) => {
      const usedValue =
        typeof value === "number"
          ? toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
          : value
      const prop = action.split("@")[1]
      const payload: Record<string, unknown> = { ...item }
      payload[prop] = usedValue

      dispatch({ type: action, payload })
      setLocalValue(usedValue as T)
    },
    [item, action, dispatch]
  )

  useEffect(() => {
    changeValue(value)
  }, [value, changeValue])

  return {
    value: localValue,
    changeValue
  }
}

export default useBindState
