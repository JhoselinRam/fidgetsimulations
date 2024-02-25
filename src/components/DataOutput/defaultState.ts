import type { DataOutputState } from "../../hooks/useMainState/resources/DataOutput/DataOutput_types"

export const dataOutputDefaultState: DataOutputState = {
  positionX: 0,
  positionY: 0,
  height: 300,
  width: 300,
  id: "",
  type: "dataoutput",
  name: ""
}

export function createDataOutputState(): DataOutputState {
  const newState = { ...dataOutputDefaultState }

  newState.id = crypto.randomUUID()
  newState.positionX = Math.random() * 500
  newState.positionY = Math.random() * 500

  return newState
}
