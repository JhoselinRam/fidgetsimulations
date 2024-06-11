import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../hooks/useMainState/resources/SimulationWindow/SimulationWindow_types"
import type { MainState } from "../hooks/useMainState/useMainState_types"
import { isCollection } from "../hooks/useMainState/useMainState"
import type { ContainerState } from "../hooks/useMainState/resources/Container/Container_types"
import { containerDefaultState } from "../hooks/useMainState/resources/Container/defaultState"
import type { ObstacleState } from "../hooks/useMainState/resources/Obstacle/Obstacle_types"
import type { ContainerCoords } from "../hooks/useSimulationWindow/useSimulationWindow_types"
import { colorMap, linspace, mapping } from "scigrapher"
import { obstacleDefaultState } from "../hooks/useMainState/resources/Obstacle/defaultState"
import { ballDefaultState } from "../hooks/useMainState/resources/Balls/defaultState"
import type { VectorState } from "../hooks/useMainState/resources/Vector/Vector_types"
import type {
  Vector_Field,
  Vector_Property_Generator
} from "scigrapher/lib/es5/Data/VectorField/Vector_Field_Types"
import { createColorGradient } from "./colorGradient"
import { clamp } from "./clamp"
import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import type { BallVectorType } from "../components/BallsConfigComponents/BallConfigComponents_types"
import { toRadians } from "./angleAux"
import { rotate } from "./vector"

// ----------------- Container Size -----------------------

export function setSize(graph: Graph2D, config: SimulationWindowState): void {
  let dpi = window.devicePixelRatio

  dpi = dpi < 1 ? 1 : dpi

  graph.containerSize({
    width: config.width * dpi,
    height: config.height * dpi
  })
}

// --------------------------------------------------------
// ------------------- Axis Domain ------------------------

export function setDomain(graph: Graph2D, config: SimulationWindowState): void {
  const domainX = { start: config.startX, end: config.endX }
  const domainY = { start: config.startY, end: config.endY }

  graph.axisDomain({ x: domainX, y: domainY })
}

// --------------------------------------------------------
// -------------------- Set Margin ------------------------

export function setMargin(graph: Graph2D, config: SimulationWindowState): void {
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
// --------------------- Set Color ------------------------

export function setColor(graph: Graph2D, config: SimulationWindowState): void {
  graph
    .backgroundColor(config.background)
    .axisColor({ xAxis: config.colorX, yAxis: config.colorY })
    .axisOpacity({ xAxis: config.opacityX, yAxis: config.opacityY })
}

// --------------------------------------------------------
// --------------------- Set Grid -------------------------

export function setGrid(graph: Graph2D, config: SimulationWindowState): void {
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

export type SetDataGraphs = readonly [
  Line_Chart,
  Vector_Field | null,
  Vector_Field | null
]

export function setData(graph: Graph2D, state: MainState): SetDataGraphs {
  const orderElements = state.order.filter(
    (collection) =>
      collection.type === "container" ||
      collection.type === "obstacle" ||
      collection.type === "balls"
  )

  let ballsGraph: Line_Chart | null = null
  let velocityGraph: Vector_Field | null = null
  let accelerationGraph: Vector_Field | null = null

  orderElements.forEach((item) => {
    const collection = state[item.type].find(
      (element) => element.id === item.id
    )
    if (isCollection(collection, containerDefaultState))
      drawObject(graph, collection)
    else if (isCollection(collection, obstacleDefaultState))
      drawObject(graph, collection)
    else if (isCollection(collection, ballDefaultState)) {
      ballsGraph = graph.addDataset("linechart")
      if (state.velocityVector.enable)
        velocityGraph = graph.addDataset("vectorfield")
      if (state.accelerationVector.enable)
        accelerationGraph = graph.addDataset("vectorfield")
      drawBalls(graph, ballsGraph, velocityGraph, accelerationGraph, state)
    }
  })

  // Fallback case, should never happen
  if (ballsGraph == null) {
    ballsGraph = graph
      .addDataset("linechart")
      .dataX([0])
      .dataY([0])
      .lineOpacity(0)
  }

  return [ballsGraph, velocityGraph, accelerationGraph]
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

  const angle = toRadians(object.angle)
  const rotatedCoords = centeredCoords.map((coord) => {
    const newCoord = rotate(coord, angle)
    return [...newCoord]
  })

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

function drawBalls(
  graph: Graph2D,
  ballsGraph: Line_Chart,
  velocityGraph: Vector_Field | null,
  accelerationGraph: Vector_Field | null,
  state: MainState
): void {
  const scale = graph.coordinateMaps().primary.x
  const radiusCorrection =
    Math.abs(scale.map(1) - scale.map(0)) /
    import.meta.env.VITE_DEFAULT_MARKER_SIZE

  const collection = state.balls[0]
  const dataX = collection.data.map((data) => data.positionX)
  const dataY = collection.data.map((data) => data.positionY)

  ballsGraph
    .dataX(dataX)
    .dataY(dataY)
    .lineEnable(false)
    .markerEnable(true)
    .markerColor(collection.data.map((data) => data.color))
    .markerSize(collection.data.map((data) => data.radius * radiusCorrection))

  drawVectors("velocity", state, dataX, dataY, velocityGraph)
  drawVectors("acceleration", state, dataX, dataY, accelerationGraph)
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawVectors(
  vectorType: BallVectorType,
  state: MainState,
  coordsX: number[],
  coordsY: number[],
  vectorGraph: Vector_Field | null
): void {
  if (vectorGraph == null) return

  const vectorState =
    vectorType === "velocity" ? state.velocityVector : state.accelerationVector
  const dataX =
    vectorType === "velocity"
      ? state.balls[0].data.map((data) => data.velocityX)
      : state.balls[0].data.map((data) => data.accelX)
  const dataY =
    vectorType === "velocity"
      ? state.balls[0].data.map((data) => data.velocityY)
      : state.balls[0].data.map((data) => data.accelY)

  vectorGraph
    .width(2)
    .meshX([coordsX])
    .meshY([coordsY])
    .dataX([dataX])
    .dataY([dataY])
    .color(getVectorColor(vectorState))
    .opacity(getVectorOpacity(vectorState))
    .normalize(vectorState.normalize)
    .maxLength(getVectorMaxLength(vectorState, dataX, dataY))
}

// --------------------------------------------------------
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

export function getVectorMaxLength(
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
