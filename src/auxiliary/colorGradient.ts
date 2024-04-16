import type { Color_Interpolator } from "scigrapher/lib/es5/tools/Color_Map/Color_Interpolator_Types"
import type { GradientInputKnob } from "../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"
import { colorInterpolator } from "scigrapher"

export function createColorGradient(
  knobs: GradientInputKnob[],
  space: GradientColorSpace
): (position: number) => string {
  const interpolators: Color_Interpolator[] = []

  for (let i = 1; i < knobs.length; i++)
    interpolators.push(
      colorInterpolator({
        from: [knobs[i - 1].position, knobs[i].position],
        to: [knobs[i - 1].color, knobs[i].color],
        space
      })
    )

  return (position) => {
    let color = ""

    for (const interpolator of interpolators) {
      const domain = interpolator.domain
      if (domain[0] <= position && position <= domain[1]) {
        color = interpolator.map(position)
        break
      }
    }

    return color
  }
}
