import type { Color_Map_types } from "scigrapher/lib/es5/tools/Color_Map/Predefined/Color_Map_Types"
import type { UseSimpleGradientShow } from "./useSimpleGradientShow_types"
import { colorMap, linspace } from "scigrapher"

function useSimpleGradientShow(
  gradientType: Color_Map_types
): UseSimpleGradientShow {
  const steps = 100
  const map = colorMap({ type: gradientType, from: 0, to: 1 })
  const position = linspace(0, 1, steps)
  const colorSteps = position.map((position) => map(position))

  return {
    colorSteps
  }
}

export default useSimpleGradientShow
