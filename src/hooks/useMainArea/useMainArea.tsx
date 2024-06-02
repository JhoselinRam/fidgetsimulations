import { useContext, useRef } from "react"
import DataOutPut from "../../components/DataOutput/DataOutput"
import Linechart from "../../components/Linechart/Linechart"
import SimulationWindow from "../../components/SimulationWindow/SimulationWindow"
import type { GraphicSelector } from "../useMainState/resources/GraphicElement/GraphicElement_types"
import type { UseMainArea } from "./useMainArea_types"
import { mainStateContext } from "../useMainState/useMainState"
import type { GraphicCollection } from "../useMainState/useMainState_types"
import useSimulation from "../useSimulation/useSimulation"

function useMainArea(): UseMainArea {
  const { mainState } = useContext(mainStateContext)
  const graphElement = useRef<HTMLDivElement | null>(null)
  const graphicSelector: GraphicSelector = {
    simulationWindow: (id) => (
      <SimulationWindow key={id} getGraphElement={getGraphElement} />
    ),
    linechart: (id) => <Linechart key={id} id={id} />,
    dataoutput: (id) => <DataOutPut key={id} id={id} />
  }
  useSimulation(graphElement)

  const graphicOrder = mainState.order.filter<GraphicCollection>(
    (collection): collection is GraphicCollection =>
      collection.type === "dataoutput" ||
      collection.type === "linechart" ||
      collection.type === "simulationWindow"
  )

  function getGraphElement(element: HTMLDivElement): void {
    graphElement.current = element
  }

  return {
    graphicSelector,
    graphicOrder
  }
}

export default useMainArea
