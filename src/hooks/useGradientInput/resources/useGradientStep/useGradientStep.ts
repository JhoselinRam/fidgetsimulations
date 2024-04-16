import { linspace } from "scigrapher"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"
import type {
  GradientColorSpace,
  GradientOnSpaceChange,
  GradientStep,
  UseGradientStep
} from "./useGradientStep_types"
import { useCallback, useEffect, useState } from "react"
import { createColorGradient } from "../../../../auxiliary/colorGradient"

function useGradientStep(
  resolution: number,
  knobs: GradientInputKnob[],
  outerSpace?: GradientColorSpace,
  onOuterSpaceChange?: GradientOnSpaceChange
): UseGradientStep {
  const [space, setSpace] = useState<GradientColorSpace>(outerSpace ?? "xyz")
  const steps = getSteps(resolution, knobs, space)

  const onInnerChange = useCallback(
    (value: GradientColorSpace) => {
      setSpace(value)
      if (onOuterSpaceChange != null) onOuterSpaceChange(value)
    },
    [onOuterSpaceChange]
  )

  useEffect(() => {
    if (outerSpace == null) return
    onInnerChange(outerSpace)
  }, [outerSpace, onInnerChange])

  useEffect(() => {
    onInnerChange(space)
  }, [space, onInnerChange])

  return {
    steps,
    space,
    changeSpace: setSpace
  }
}

export default useGradientStep

function getSteps(
  resolution: number,
  knobs: GradientInputKnob[],
  space: GradientColorSpace
): GradientStep[] {
  const gradientPositions = linspace(
    0,
    (resolution - 1) / resolution,
    resolution
  )
  const colorMap = createColorGradient(knobs, space)
  const steps = gradientPositions.map((position) => {
    return { position, color: colorMap(position) }
  })

  return steps
}
