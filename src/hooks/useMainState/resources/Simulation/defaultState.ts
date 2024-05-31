import type { SimulationRun, SimulationState } from "./Simulation_types"

export const simulationRunDefaultState: SimulationRun = {
  run: false
}

export const simulationDefaultState: SimulationState = {
  ...simulationRunDefaultState
}
