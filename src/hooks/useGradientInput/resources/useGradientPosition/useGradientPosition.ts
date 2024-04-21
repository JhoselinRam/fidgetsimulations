import { useCallback, useEffect, useState } from "react"
import type { UseGradientPosition } from "./useGradientPosition_types"
import { toRounded } from "../../../../auxiliary/toRounded"
import type { GradientInputKnob } from "../useGradientKnob/useGradientKnob_types"

function useGradientPosition(
  knobs: GradientInputKnob[],
  index: number,
  onMoveKnob: (position: number, index: number) => void
): UseGradientPosition {
  const knobPosition = knobs[index].position
  const [position, setPosition] = useState(knobPosition)

  const changePosition = useCallback(
    (position: number) => {
      const newPosition = toRounded(
        position,
        import.meta.env.VITE_ROUNDED_DECIMALS
      )
      onMoveKnob(newPosition, index)
      setPosition(newPosition)
    },
    [index, onMoveKnob]
  )

  useEffect(() => {
    changePosition(knobPosition)
  }, [knobPosition, changePosition])

  useEffect(() => {
    changePosition(knobPosition)
  }, [knobPosition, changePosition, index])

  return {
    changePosition,
    position
  }
}

export default useGradientPosition
