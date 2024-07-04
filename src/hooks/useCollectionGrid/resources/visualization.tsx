import type { Dispatch } from "react"
import type {
  MainState,
  MainStateAction
} from "../../useMainState/useMainState_types"
import type { ItemType } from "../../../components/CollectionPicker/resources/CollectionGrid/CollectionGrid_types"
import LinechartIcon from "../../../components/Icons/LinechartIcon/LinechartIcon"
import DataIcon from "../../../components/Icons/DataIcon/DataIcon"
import { createLinechartState } from "../../useMainState/resources/Linechart/defaultState"
import { createDataOutputState } from "../../useMainState/resources/DataOutput/defaultState"
import { createVelocityVectorState } from "../../useMainState/resources/VelocityVector/defaultState"
import { createAccelerationVectorState } from "../../useMainState/resources/AccelerationVector/defaultState"
import VelocityIcon from "../../../components/Icons/VelocityVectorIcon/VelocityVectorIcon"
import AccelerationVectorIcon from "../../../components/Icons/accelerationVectorIcon/AccelerationVectorIcon"

function getVisualizationItems(
  state: MainState,
  dispatch: Dispatch<MainStateAction>
): ItemType[] {
  // ------------------- Line Chart -------------------------

  const lineChartItem: ItemType = {
    id: "linechart",
    title: ["Line", "Chart"],
    action: lineChartAction,
    children: <LinechartIcon />
  }

  function lineChartAction(): void {
    const newLinechart = createLinechartState()
    newLinechart.name = `Linechart ${state.linechart.length + 1}`

    dispatch({
      type: "linechart@new",
      payload: newLinechart as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // -------------------- Data Out --------------------------

  const dataOutItem: ItemType = {
    id: "dataout",
    title: ["Data", "Out"],
    action: dataOutAction,
    children: <DataIcon />
  }

  function dataOutAction(): void {
    const newDataOutput = createDataOutputState()
    newDataOutput.name = `Data out ${state.dataoutput.length + 1}`

    dispatch({
      type: "dataoutput@new",
      payload: newDataOutput as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // ----------------- Velocity Vector ----------------------

  const velocityVectorItem: ItemType = {
    id: "velocityVector",
    title: ["Velocity", "Vector"],
    action: velocityVectorAction,
    children: <VelocityIcon />
  }

  function velocityVectorAction(): void {
    const newVelocityVector = createVelocityVectorState()
    newVelocityVector.name = `Velocity vec ${state.velocityVector.length + 1}`

    dispatch({
      type: "velocityVector@new",
      payload: newVelocityVector as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------
  // ----------------- Acceleration Vector ----------------------

  const accelerationVectorItem: ItemType = {
    id: "accelerationVector",
    title: ["Accel", "Vector"],
    action: accelerationVectorAction,
    children: <AccelerationVectorIcon />
  }

  function accelerationVectorAction(): void {
    const newAccelerationVector = createAccelerationVectorState()
    newAccelerationVector.name = `Accel vec ${
      state.accelerationVector.length + 1
    }`

    dispatch({
      type: "accelerationVector@new",
      payload: newAccelerationVector as unknown as Record<string, unknown>
    })
  }

  // --------------------------------------------------------

  return [
    lineChartItem,
    dataOutItem,
    velocityVectorItem,
    accelerationVectorItem
  ]
}

export default getVisualizationItems
