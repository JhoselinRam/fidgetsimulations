import type { Color_Interpolator } from "scigrapher/lib/es5/tools/Color_Map/Color_Interpolator_Types"
import type { GradientInputKnob } from "../hooks/useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../hooks/useGradientInput/resources/useGradientStep/useGradientStep_types"
import { colorInterpolator } from "scigrapher"

export function createColorGradient(
  knobs: GradientInputKnob[],
  space: GradientColorSpace
): (position: number) => string {
  const interpolators: Color_Interpolator[] = []

  if (knobs[0].position !== 0)
    interpolators.push(
      colorInterpolator({
        from: [0, knobs[0].position],
        to: [knobs[0].color, knobs[0].color],
        space
      })
    )

  for (let i = 1; i < knobs.length; i++)
    interpolators.push(
      colorInterpolator({
        from: [knobs[i - 1].position, knobs[i].position],
        to: [knobs[i - 1].color, knobs[i].color],
        space
      })
    )

  if (knobs[knobs.length - 1].position !== 1)
    interpolators.push(
      colorInterpolator({
        from: [knobs[knobs.length - 1].position, 1],
        to: [knobs[knobs.length - 1].color, knobs[knobs.length - 1].color],
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
