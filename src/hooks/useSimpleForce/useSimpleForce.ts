import { useContext, useState } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import useMagnitude from "./resources/useMagnitude/useMagnitude"
import type {
  MagnitudeDefaultValue,
  MagnitudeProps,
  UseSimpleForce
} from "./useSimpleForce_types"
import useScientific from "./resources/useScientific/useScientific"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type { GravityState } from "../useMainState/resources/Gravity/Gravity_types"
import type { DragState } from "../useMainState/resources/Drag/Drag_types"
import type { ElectricState } from "../useMainState/resources/Electric/Electric_types"
import { gravityMagnitudeDefaultState } from "../useMainState/resources/Gravity/defaultState"
import { dragMagnitudeDefaultState } from "../useMainState/resources/Drag/defaultState"
import { electricMagnitudeDefaultState } from "../useMainState/resources/Electric/defaultState"

function useSimpleForce(item: CollectionOrder): UseSimpleForce {
  const { mainState } = useContext(mainStateContext)
  const { magnitude } = getMagnitudeProps(item, mainState)

  const [isScientific, setIsScientific] = useState(true)
  const simpleMagnitudeHooks = useMagnitude(item, magnitude)
  const { scientificMagnitudeHooks, scientificPowerHooks } = useScientific(
    item,
    magnitude
  )

  return {
    simpleMagnitudeHooks,
    scientificMagnitudeHooks,
    scientificPowerHooks,
    scientificHooks: {
      value: isScientific,
      onChange: setIsScientific
    }
  }
}

export default useSimpleForce

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
