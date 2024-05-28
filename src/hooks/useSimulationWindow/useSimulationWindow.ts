import { useEffect, type RefObject, useContext, type Dispatch } from "react"
import { isCollection, mainStateContext } from "../useMainState/useMainState"
import { colorMap, graph2D, linspace, mapping } from "scigrapher"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../useMainState/resources/SimulationWindow/SimulationWindow_types"
import type {
  MainState,
  MainStateAction
} from "../useMainState/useMainState_types"
import type { ContainerState } from "../useMainState/resources/Container/Container_types"
import { containerDefaultState } from "../useMainState/resources/Container/defaultState"
import type { ContainerCoords } from "./useSimulationWindow_types"
import type { ObstacleState } from "../useMainState/resources/Obstacle/Obstacle_types"
import { obstacleDefaultState } from "../useMainState/resources/Obstacle/defaultState"
import type { BallState } from "../useMainState/resources/Balls/Balls_types"
import { ballDefaultState } from "../useMainState/resources/Balls/defaultState"
import type { VectorState } from "../useMainState/resources/Vector/Vector_types"
import type { Vector_Property_Generator } from "scigrapher/lib/es5/Data/VectorField/Vector_Field_Types"
import { clamp } from "../../auxiliary/clamp"
import { createColorGradient } from "../../auxiliary/colorGradient"

function useSimulationWindow(graphElement: RefObject<HTMLDivElement>): void {
  const { mainState, dispatch } = useContext(mainStateContext)
  const simulationCollection = mainState.simulationWindow[0]
  const simulationString = JSON.stringify(simulationCollection)
  const containers = JSON.stringify(mainState.container)
  const obstacles = JSON.stringify(mainState.obstacle)
  const balls = JSON.stringify(mainState.balls[0].data)
  const velocityVector = JSON.stringify(mainState.velocityVector)

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
    containers,
    obstacles,
    balls,
    velocityVector
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
    (collection) =>
      collection.type === "container" ||
      collection.type === "obstacle" ||
      collection.type === "balls"
  )

  orderElements.forEach((item) => {
    const collection = state[item.type].find(
      (element) => element.id === item.id
    )
    if (isCollection<ContainerState>(collection, containerDefaultState))
      drawObject(graph, collection)
    else if (isCollection<ObstacleState>(collection, obstacleDefaultState))
      drawObject(graph, collection)
    else if (isCollection<BallState>(collection, ballDefaultState))
      drawBalls(graph, state)
  })
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawObject(
  graph: Graph2D,
  object: ContainerState | ObstacleState
): void {
  const data = getObjectData(object)

  graph
    .addDataset("linechart")
    .dataX(data.x)
    .dataY(data.y)
    .lineColor(object.borderColor)
    .lineOpacity(object.borderOpacity)
    .lineWidth(object.borderWidth)

  if (object.fillOpacity === 0) return

  graph
    .addDataset("area")
    .dataX(data.x)
    .dataY(data.y)
    .baseX([data.x[0]])
    .baseY([data.y[0]])
    .color(object.fillColor)
    .opacity(object.fillOpacity)
}

// --------------------------------------------------------
// --------------------------------------------------------

function getObjectData(
  object: ContainerState | ObstacleState
): ContainerCoords {
  const initialCoords = getInitialCoors(object)

  const centerCoords = [
    object.positionX + object.width / 2,
    object.positionY - object.height / 2
  ]

  const centeredCoords = initialCoords.map((coord) => [
    coord[0] - centerCoords[0],
    coord[1] - centerCoords[1]
  ])

  const angle = (Math.PI / 180) * object.angle
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
// --------------------------------------------------------

function getInitialCoors(object: ContainerState | ObstacleState): number[][] {
  if (object.shape === "rectangle")
    return [
      [object.positionX, object.positionY],
      [object.positionX + object.width, object.positionY],
      [object.positionX + object.width, object.positionY - object.height],
      [object.positionX, object.positionY - object.height],
      [object.positionX, object.positionY]
    ]

  // else
  const a = object.width / 2
  const b = object.height / 2
  const positiveX = linspace(-a, a, import.meta.env.VITE_ELLIPSE_RESOLUTION)
  const negativeX = positiveX.slice().reverse()
  const y = positiveX.map((x) => b * Math.sqrt(1 - x ** 2 / a ** 2))

  const centerCoords = [
    object.positionX + object.width / 2,
    object.positionY - object.height / 2
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
// --------------------------------------------------------

function drawBalls(graph: Graph2D, state: MainState): void {
  const scale = graph.coordinateMaps().primary.x
  const radiusCorrection =
    Math.abs(scale.map(1) - scale.map(0)) /
    import.meta.env.VITE_DEFAULT_MARKER_SIZE

  const collection = state.balls[0]
  const dataX = collection.data.map((data) => data.positionX)
  const dataY = collection.data.map((data) => data.positionY)

  graph
    .addDataset("linechart")
    .dataX(dataX)
    .dataY(dataY)
    .lineEnable(false)
    .markerEnable(true)
    .markerColor(collection.data.map((data) => data.color))
    .markerSize(collection.data.map((data) => data.radius * radiusCorrection))

  drawVectors(graph, state.velocityVector, state, dataX, dataY)
  drawVectors(graph, state.accelerationVector, state, dataX, dataY)
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawVectors(
  graph: Graph2D,
  vectorState: VectorState,
  state: MainState,
  coordsX: number[],
  coordsY: number[]
): void {
  if (!vectorState.enable) return

  const dataX = state.balls[0].data.map((data) => data.velocityX)
  const dataY = state.balls[0].data.map((data) => data.velocityY)

  graph
    .addDataset("vectorfield")
    .width(2)
    .meshX([coordsX])
    .meshY([coordsY])
    .dataX([dataX])
    .dataY([dataY])
    .maxLength(30)
    .color(getVectorColor(vectorState))
    .opacity(getVectorOpacity(vectorState))
    .normalize(vectorState.normalize)
    .maxLength(getVectorMaxLength(vectorState, dataX, dataY))
}

// --------------------------------------------------------

function getVectorColor(
  vectorState: VectorState
): Vector_Property_Generator<string> {
  if (vectorState.colorMode === "static") return vectorState.color

  let colors: (value: number) => string
  if (vectorState.gradientType === "custom") {
    const map = createColorGradient(
      vectorState.gradientStops,
      vectorState.gradientSpace
    )

    colors = (value: number) => {
      return map(
        (value - vectorState.minColorMagnitude) /
          (vectorState.maxColorMagnitude - vectorState.minColorMagnitude)
      )
    }
  } else {
    colors = colorMap({
      from: vectorState.minColorMagnitude,
      to: vectorState.maxColorMagnitude,
      type: vectorState.gradientType
    })
  }

  return (x, y) => {
    const magnitude = Math.hypot(x, y)
    const usedMagnitude = clamp(
      magnitude,
      vectorState.minColorMagnitude,
      vectorState.maxColorMagnitude
    )

    return colors(usedMagnitude)
  }
}

// --------------------------------------------------------

function getVectorOpacity(
  vectorState: VectorState
): Vector_Property_Generator<number> {
  if (vectorState.opacityMode === "static") return vectorState.opacity

  const opacityMap = mapping({
    from: [vectorState.minOpacityMagnitude, vectorState.maxOpacityMagnitude],
    to: [vectorState.minOpacity, vectorState.maxOpacity]
  })

  return (x, y) => {
    const magnitude = Math.hypot(x, y)
    const usedMagnitude = clamp(
      magnitude,
      vectorState.minOpacityMagnitude,
      vectorState.maxOpacityMagnitude
    )

    return opacityMap.map(usedMagnitude)
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function getVectorMaxLength(
  vectorState: VectorState,
  dataX: number[],
  dataY: number[]
): number {
  if (!vectorState.normalize) return 1

  const magnitudes = dataX.map((x, index) => {
    const y = dataY[index]
    return Math.hypot(x, y)
  })

  const maxMagnitude = Math.max(...magnitudes)

  return (vectorState.maxSize * maxMagnitude) / vectorState.maxSizeMagnitude
}

// --------------------------------------------------------
