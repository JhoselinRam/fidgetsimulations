import { generateStaticSlice } from "../../useMainState"
import { simulationDefaultState } from "./defaultState"

export const simulationRun = generateStaticSlice(
  "simulation",
  simulationDefaultState,
  "run"
)
