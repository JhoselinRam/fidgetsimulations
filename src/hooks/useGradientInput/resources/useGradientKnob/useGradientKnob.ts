import { useCallback, useEffect, useState } from "react"
import type {
  GradientInputKnob,
  GradientOnChange,
  UseGradientKnob
} from "./useGradientKnob_types"

const defaultKnobs: GradientInputKnob[] = [
  { position: 0, color: "#000000" },
  { position: 1, color: "#ffffff" }
]

function useGradientKnob(
  value?: GradientInputKnob[],
  onChange?: GradientOnChange
): UseGradientKnob {
  const [knobs, setKnobs] = useState<GradientInputKnob[]>(value ?? defaultKnobs)

  const onInnerChange = useCallback(
    (value: GradientInputKnob[]) => {
      setKnobs(value)
      if (onChange != null) onChange(value)
    },
    [onChange]
  )

  useEffect(() => {
    const validKnobs = getValidInputKnobs(knobs)

    onInnerChange(validKnobs)
  }, [knobs, onInnerChange])

  useEffect(() => {
    if (value == null) return
    const validKnobs = getValidInputKnobs(value)
    onInnerChange(validKnobs)
  }, [value, onInnerChange])

  return {
    knobs
  }
}

export default useGradientKnob

function getValidInputKnobs(knobs: GradientInputKnob[]): GradientInputKnob[] {
  if (knobs.length === 0) return defaultKnobs

  const newKnobs = knobs.sort((a, b) => a.position - b.position)
  if (newKnobs[0].position !== 0)
    newKnobs.unshift({ position: 0, color: newKnobs[0].color })

  if (newKnobs[newKnobs.length - 1].position !== 1)
    newKnobs.push({ position: 1, color: newKnobs[newKnobs.length - 1].color })

  return newKnobs
}
