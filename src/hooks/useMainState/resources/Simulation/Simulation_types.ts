export type SimulationActionType = SimulationRunActionType

export interface SimulationState extends SimulationRun {}

export type SimulationStateKeys = keyof SimulationState

// --------------------------------------------------------
// ----------------------- Run ----------------------------

export type SimulationRunActionType = "simulation@run"

export interface SimulationRun {
  run: boolean
}

// --------------------------------------------------------
