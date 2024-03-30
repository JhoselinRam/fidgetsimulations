import { useCallback, useContext, useEffect, useState } from "react"
import useBindState from "../useBindState/useBindState"
import type {
  CollectionOrder,
  MainStateActionType
} from "../useMainState/useMainState_types"
import type { UseSizeConfig } from "./useSizeConfig_types"
import { toRounded } from "../../auxiliary/toRounded"
import { mainStateContext } from "../useMainState/useMainState"

function useSizeConfig(
  item: CollectionOrder,
  valueWidth: number,
  valueHeight: number,
  valueRatioLock: boolean,
  actionWidth: MainStateActionType,
  actionHeight: MainStateActionType,
  actionRatioLock: MainStateActionType
): UseSizeConfig {
  const { dispatch } = useContext(mainStateContext)
  const ratioProps = useBindState(item, valueRatioLock, actionRatioLock)
  const [width, setWidth] = useState(valueWidth)
  const [height, setHeight] = useState(valueHeight)

  const updateValue = useCallback(
    (value: number, prop: "width" | "height") => {
      const action = { width: actionWidth, height: actionHeight }
      const setter = { width: setWidth, height: setHeight }
      const usedValue = toRounded(value, import.meta.env.VITE_ROUNDED_DECIMALS)
      const payload: Record<string, unknown> = { ...item }
      payload[prop] = usedValue

      dispatch({ type: action[prop], payload })
      setter[prop](usedValue)
    },
    [item, actionWidth, actionHeight, dispatch]
  )

  const changeWidth = useCallback(
    (value: number) => {
      updateValue(value, "width")

      if (ratioProps.value) {
        const ratio = valueHeight / valueWidth
        const newHeight = toRounded(
          value * ratio,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )
        updateValue(newHeight, "height")
      }
    },
    [updateValue, ratioProps.value, valueHeight, valueWidth]
  )

  const changeHeight = useCallback(
    (value: number) => {
      updateValue(value, "height")

      if (ratioProps.value) {
        const ratio = valueWidth / valueHeight
        const newWidth = toRounded(
          value * ratio,
          import.meta.env.VITE_ROUNDED_DECIMALS
        )
        updateValue(newWidth, "width")
      }
    },
    [updateValue, ratioProps.value, valueHeight, valueWidth]
  )

  useEffect(() => {
    changeWidth(valueWidth)
  }, [valueWidth, changeWidth])

  useEffect(() => {
    changeHeight(valueHeight)
  }, [valueHeight, changeHeight])

  return {
    ratioHooks: {
      isSelected: ratioProps.value,
      onChange: ratioProps.changeValue
    },
    widthHooks: {
      value: width,
      onChange: changeWidth
    },
    heightHooks: {
      value: height,
      onChange: changeHeight
    }
  }
}

export default useSizeConfig
