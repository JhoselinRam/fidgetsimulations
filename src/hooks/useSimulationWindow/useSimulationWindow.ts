import { useEffect, type RefObject, useContext, type Dispatch } from "react"
import { isCollection, mainStateContext } from "../useMainState/useMainState"
import { graph2D, linspace } from "scigrapher"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type {
  MainState,
  MainStateAction
} from "../useMainState/useMainState_types"
import type { ContainerState } from "../useMainState/resources/Container/Container_types"
import { containerDefaultState } from "../useMainState/resources/Container/defaultState"
import type { ContainerCoords } from "./useSimulationWindow_types"

function useSimulationWindow(graphElement: RefObject<HTMLDivElement>): void {
  const { mainState, dispatch } = useContext(mainStateContext)
  const simulationCollection = mainState.simulationWindow[0]
  const simulationString = JSON.stringify(simulationCollection)
  const containers = JSON.stringify(mainState.container)

  useEffect(() => {
    if (graphElement.current == null) return

    graphElement.current.replaceChildren()

    const graph = graph2D(graphElement.current)

    setSize(graph, simulationCollection)
    setDomain(graph, simulationCollection)
    setMargin(graph, simulationCollection)
    setAspectRatio(graph, simulationCollection, dispatch)
    setColor(graph, simulationCollection)
    setGrid(graph, simulationCollection)
    setData(graph, mainState)

    graph.draw()
  }, [
    graphElement,
    simulationString,
    simulationCollection,
    dispatch,
    mainState,
    containers
  ])
}

export default useSimulationWindow

// --------------------------------------------------------
// ------------------- Axis Domain ------------------------
function setDomain(graph: Graph2D, config: SimulationWindowState): void {
  const domainX = { start: config.startX, end: config.endX }
  const domainY = { start: config.startY, end: config.endY }

  graph.axisDomain({ x: domainX, y: domainY })
}
// --------------------------------------------------------
// ----------------- Container Size -----------------------
function setSize(graph: Graph2D, config: SimulationWindowState): void {
  let dpi = window.devicePixelRatio

  dpi = dpi < 1 ? 1 : dpi

  graph.containerSize({
    width: config.width * dpi,
    height: config.height * dpi
  })
}
// --------------------------------------------------------
// -------------------- Set Margin ------------------------

function setMargin(graph: Graph2D, config: SimulationWindowState): void {
  const dpi = window.devicePixelRatio
  let marginX = 0
  let marginY = 0

  if (dpi < 1) {
    marginX = config.width * (1 - dpi)
    marginY = config.height * (1 - dpi)
  }

  graph.margin({ x: { end: marginX }, y: { start: marginY } })
}

// --------------------------------------------------------
// ------------------ Set Aspect Ratio --------------------

function setAspectRatio(
  graph: Graph2D,
  config: SimulationWindowState,
  dispatch: Dispatch<MainStateAction>
): void {
  if (!config.setAspectRatio) return

  const yDomain = graph.axisDomain().y
  const anchor = yDomain.start + (yDomain.end - yDomain.start) / 2
  graph.aspectRatio({ anchor, ratio: 1, source: "x", target: "y" })

  const newYDomain = graph.axisDomain().y

  dispatch({
    type: "graphic@startY",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      startY: newYDomain.start
    }
  })
  dispatch({
    type: "graphic@endY",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      endY: newYDomain.end
    }
  })
  dispatch({
    type: "graphic@aspectRatio",
    payload: {
      type: "simulationWindow",
      id: "simulationWindow",
      setAspectRatio: false
    }
  })
}

// --------------------------------------------------------
// --------------------- Set Color ------------------------

function setColor(graph: Graph2D, config: SimulationWindowState): void {
  graph
    .backgroundColor(config.background)
    .axisColor({ xAxis: config.colorX, yAxis: config.colorY })
    .axisOpacity({ xAxis: config.opacityX, yAxis: config.opacityY })
}

// --------------------------------------------------------
// --------------------- Set Grid -------------------------

function setGrid(graph: Graph2D, config: SimulationWindowState): void {
  graph
    .gridColor({
      primary: config.gridPrimaryColor,
      secondary: config.gridSecondaryColor
    })
    .gridOpacity({
      primary: config.gridPrimaryEnable ? 0.2 : 0,
      secondary: config.gridSecondaryEnable ? 0.1 : 0
    })
}

// --------------------------------------------------------
// -------------------- Set data --------------------------

function setData(graph: Graph2D, state: MainState): void {
  const orderElements = state.order.filter(
    (collection) => collection.type === "container"
  )

  orderElements.forEach((item) => {
    const collection = state[item.type].find(
      (element) => element.id === item.id
    )
    if (isCollection<ContainerState>(collection, containerDefaultState))
      drawContainer(graph, collection)
  })
}

// --------------------------------------------------------

function drawContainer(graph: Graph2D, container: ContainerState): void {
  const data = getContainerData(container)

  graph
    .addDataset("linechart")
    .dataX(data.x)
    .dataY(data.y)
    .lineColor(container.borderColor)
    .lineOpacity(container.borderOpacity)
    .lineWidth(container.borderWidth)

  if (container.fillOpacity === 0) return

  graph
    .addDataset("area")
    .dataX(data.x)
    .dataY(data.y)
    .baseX([data.x[0]])
    .baseY([data.y[0]])
    .color(container.fillColor)
    .opacity(container.fillOpacity)
}

// --------------------------------------------------------

function getContainerData(container: ContainerState): ContainerCoords {
  const initialCoords = getInitialCoors(container)

  const centerCoords = [
    container.positionX + container.width / 2,
    container.positionY - container.height / 2
  ]

  const centeredCoords = initialCoords.map((coord) => [
    coord[0] - centerCoords[0],
    coord[1] - centerCoords[1]
  ])

  const angle = (Math.PI / 180) * container.angle
  const rotatedCoords = centeredCoords.map((coord) => [
    coord[0] * Math.cos(angle) - coord[1] * Math.sin(angle),
    coord[0] * Math.sin(angle) + coord[1] * Math.cos(angle)
  ])

  const finalCoords = rotatedCoords.map((coord) => [
    coord[0] + centerCoords[0],
    coord[1] + centerCoords[1]
  ])

  return {
    x: finalCoords.map((coord) => coord[0]),
    y: finalCoords.map((coord) => coord[1])
  }
}

// --------------------------------------------------------

function getInitialCoors(container: ContainerState): number[][] {
  if (container.shape === "rectangle")
    return [
      [container.positionX, container.positionY],
      [container.positionX + container.width, container.positionY],
      [
        container.positionX + container.width,
        container.positionY - container.height
      ],
      [container.positionX, container.positionY - container.height],
      [container.positionX, container.positionY]
    ]

  // else
  const a = container.width / 2
  const b = container.height / 2
  const positiveX = linspace(-a, a, import.meta.env.VITE_ELLIPSE_RESOLUTION)
  const negativeX = positiveX.slice().reverse()
  const y = positiveX.map((x) => b * Math.sqrt(1 - x ** 2 / a ** 2))

  const centerCoords = [
    container.positionX + container.width / 2,
    container.positionY - container.height / 2
  ]

  const positiveCoords = positiveX.map((x, i) => [
    x + centerCoords[0],
    y[i] + centerCoords[1]
  ])
  const negativeCoords = negativeX.map((x, i) => [
    x + centerCoords[0],
    -y[i] + centerCoords[1]
  ])

  return [...positiveCoords, ...negativeCoords]
}

// --------------------------------------------------------
