import { useContext } from "react"
import type { DragState } from "../../../useMainState/resources/Drag/Drag_types"
import type { ElectricState } from "../../../useMainState/resources/Electric/Electric_types"
import type { GravityState } from "../../../useMainState/resources/Gravity/Gravity_types"
import {
  getCollection,
  mainStateContext
} from "../../../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../../../useMainState/useMainState_types"
import type {
  MagnitudeDefaultValue,
  MagnitudeProps,
  UseMagnitude
} from "./useMagnitude_types"
import { gravityMagnitudeDefaultState } from "../../../useMainState/resources/Gravity/defaultState"
import { dragMagnitudeDefaultState } from "../../../useMainState/resources/Drag/defaultState"
import { electricMagnitudeDefaultState } from "../../../useMainState/resources/Electric/defaultState"
import useBindState from "../../../useBindState/useBindState"

function useMagnitude(item: CollectionOrder): UseMagnitude {
  const { mainState } = useContext(mainStateContext)
  const { magnitude } = getMagnitudeProps(item, mainState)
  const magnitudeState = useBindState(item, magnitude, "simpleForce@magnitude")

  return {
    value: magnitudeState.value,
    onChange: magnitudeState.changeValue
  }
}

export default useMagnitude

function getMagnitudeProps(
  item: CollectionOrder,
  state: MainState
): MagnitudeProps {
  const collection = getCollection<GravityState | DragState | ElectricState>(
    item,
    state,
    ["gravity", "drag", "electric"]
  )
  const defaultValue: MagnitudeDefaultValue = {
    gravity: gravityMagnitudeDefaultState.magnitude,
    drag: dragMagnitudeDefaultState.magnitude,
    electric: electricMagnitudeDefaultState.magnitude
  }
  const defaultMagnitude =
    item.type !== "gravity" && item.type !== "drag" && item.type !== "electric"
      ? 0
      : defaultValue[item.type]

  if (collection == null) return { magnitude: defaultMagnitude }

  return {
    magnitude: collection.magnitude
  }
}
