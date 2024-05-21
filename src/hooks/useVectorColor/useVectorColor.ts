import { useContext } from "react"
import type { BallVectorType } from "../../components/BallsConfigComponents/BallConfigComponents_types"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { VectorColorProps, UseVectorColor } from "./useVectorColor_types"
import { mainStateContext } from "../useMainState/useMainState"
import useBindState from "../useBindState/useBindState"

function useVectorColor(type: BallVectorType): UseVectorColor {
  const { mainState } = useContext(mainStateContext)
  const id = type === "velocity" ? "velocityVector" : "accelerationVector"
  const item: CollectionOrder = { id, type: "balls" }
  const {
    color,
    colorMode,
    gradientSpace,
    gradientStops,
    gradientType,
    maxColorMagnitude,
    minColorMagnitude
  } = getVectorColorProps(mainState, id)

  const colorModeProps = useBindState(item, colorMode, "vector@colorMode")
  const colorProps = useBindState(item, color, "vector@color")
  const minColorProps = useBindState(
    item,
    minColorMagnitude,
    "vector@minColorMagnitude"
  )
  const maxColorProps = useBindState(
    item,
    maxColorMagnitude,
    "vector@maxColorMagnitude"
  )
  const gradientTypeProps = useBindState(
    item,
    gradientType,
    "vector@gradientType"
  )
  const gradientSpaceProps = useBindState(
    item,
    gradientSpace,
    "vector@gradientSpace"
  )
  const gradientStopsProps = useBindState(
    item,
    gradientStops,
    "vector@gradientStops"
  )

  return {
    colorModeHooks: {
      value: colorModeProps.value,
      onChange: colorModeProps.changeValue
    },
    staticColorHooks: {
      value: colorProps.value,
      onChange: colorProps.changeValue
    },
    dynamicColorHooks: {
      colorRangeHooks: {
        minHooks: {
          value: minColorProps.value,
          onChange: minColorProps.changeValue
        },
        maxHooks: {
          value: maxColorProps.value,
          onChange: maxColorProps.changeValue
        }
      },
      colorGradientHooks: {
        gradientTypeHooks: {
          value: gradientTypeProps.value,
          onChange: gradientTypeProps.changeValue
        },
        spaceHooks: {
          value: gradientSpaceProps.value,
          onChange: gradientSpaceProps.changeValue
        },
        gradientStopsHooks: {
          value: gradientStopsProps.value,
          onChange: gradientStopsProps.changeValue
        }
      }
    }
  }
}

export default useVectorColor

function getVectorColorProps(
  state: MainState,
  vectorType: "velocityVector" | "accelerationVector"
): VectorColorProps {
  const vectorData = state[vectorType]

  return {
    color: vectorData.color,
    colorMode: vectorData.colorMode,
    gradientSpace: vectorData.gradientSpace,
    gradientStops: vectorData.gradientStops,
    gradientType: vectorData.gradientType,
    maxColorMagnitude: vectorData.maxColorMagnitude,
    minColorMagnitude: vectorData.minColorMagnitude
  }
}
