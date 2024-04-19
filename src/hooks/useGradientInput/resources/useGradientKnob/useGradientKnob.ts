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
  const stringKnobs = JSON.stringify(knobs)
  const stringValue = JSON.stringify(value)
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
  }, [knobs, onInnerChange, stringKnobs])

  useEffect(() => {
    if (value == null) return
    const validKnobs = getValidInputKnobs(value)
    onInnerChange(validKnobs)
  }, [value, onInnerChange, stringValue])

  return {
    knobs,
    setKnobs
  }
}

export default useGradientKnob

function getValidInputKnobs(knobs: GradientInputKnob[]): GradientInputKnob[] {
  if (knobs.length === 0) return defaultKnobs

  const newKnobs = knobs.sort((a, b) => a.position - b.position)

  return newKnobs
}
