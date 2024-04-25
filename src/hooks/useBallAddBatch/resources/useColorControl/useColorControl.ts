import { useState } from "react"
import type { ColorControlMode, UseColorControl } from "./useColorControl_types"
import { ballColorDefaultState } from "../../../useMainState/resources/Balls/defaultState"
import type { GradientInputKnob } from "../../../useGradientInput/resources/useGradientKnob/useGradientKnob_types"
import type { GradientColorSpace } from "../../../useGradientInput/resources/useGradientStep/useGradientStep_types"

const defaultGradientKnobs: GradientInputKnob[] = [
  { position: 0, color: "#0000ff" },
  { position: 1, color: "#ff0000" }
]

function useColorControl(): UseColorControl {
  const [mode, setMode] = useState<ColorControlMode>("fixed")
  const [fixed, setFixed] = useState(ballColorDefaultState.color)
  const [linearKnobs, setLinearKnobs] = useState<GradientInputKnob[]>([
    ...defaultGradientKnobs
  ])
  const [linearSpace, setLinearSpace] = useState<GradientColorSpace>("rgb")
  const [randomKnobs, setRandomKnobs] = useState<GradientInputKnob[]>([
    ...defaultGradientKnobs
  ])
  const [randomSpace, setRandomSpace] = useState<GradientColorSpace>("rgb")

  return {
    controlMode: {
      mode,
      changeMode: setMode
    },
    fixed: {
      value: fixed,
      changeValue: setFixed
    },
    linear: {
      knobs: linearKnobs,
      changeKnobs: setLinearKnobs,
      space: linearSpace,
      changeSpace: setLinearSpace
    },
    random: {
      knobs: randomKnobs,
      changeKnobs: setRandomKnobs,
      space: randomSpace,
      changeSpace: setRandomSpace
    }
  }
}

export default useColorControl
