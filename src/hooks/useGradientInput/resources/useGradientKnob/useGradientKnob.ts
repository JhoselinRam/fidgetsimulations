import { useCallback, useEffect, useState } from "react"
import type {
  GradientInputKnob,
  GradientOnChange,
  UseGradientKnob
} from "./useGradientKnob_types"
import { toRounded } from "../../../../auxiliary/toRounded"

const defaultKnobs: GradientInputKnob[] = [
  { position: 0, color: "#000000" },
  { position: 1, color: "#ffffff" }
]

function useGradientKnob(
  isDisabled: boolean,
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
    const validKnobs = isDisabled
      ? getValidInputKnobs(knobs)
      : getValidInputKnobs(value)

    onInnerChange(validKnobs)
  }, [value, onInnerChange, stringValue, isDisabled, knobs])

  return {
    knobs,
    setKnobs
  }
}

export default useGradientKnob

function getValidInputKnobs(knobs: GradientInputKnob[]): GradientInputKnob[] {
  if (knobs.length === 0) return defaultKnobs

  const newKnobs = knobs.sort((a, b) => a.position - b.position)

  for (const knob of knobs) {
    knob.position = toRounded(
      knob.position,
      import.meta.env.VITE_ROUNDED_DECIMALS
    )
  }

  return newKnobs
}
