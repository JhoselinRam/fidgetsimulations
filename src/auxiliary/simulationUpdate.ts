import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import type { SimulationWindowState } from "../hooks/useMainState/resources/SimulationWindow/SimulationWindow_types"
import type {
  CollectionType,
  MainState
} from "../hooks/useMainState/useMainState_types"
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
import { toRadians } from "./angleAux"
import { rotate } from "./vector"
import type {
  LinkGraph,
  TrajectoryGraph
} from "../hooks/useSimulation/useSimulation_types"
import { vectorDefaultState } from "../hooks/useMainState/resources/Vector/defaultState"
import { computeForce } from "../hooks/useSimulation/resources/force"
import type { BallState } from "../hooks/useMainState/resources/Balls/Balls_types"
import { linkDefaultState } from "../hooks/useMainState/resources/Link/defaultState"
import type { SpringState } from "../hooks/useMainState/resources/Spring/Spring_types"
import type { RodState } from "../hooks/useMainState/resources/Rod/Rod_types"

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

export interface SetDataGraphs {
  ballGraphElement: Line_Chart
  vectorGraphElement: VectorGraph[]
  trajectoryGraphElement: TrajectoryGraph[]
  linkGraphElement: LinkGraph[]
}

export interface VectorGraph {
  type: "velocityVector" | "accelerationVector"
  id: string
  field: Vector_Field
}

export function setData(graph: Graph2D, state: MainState): SetDataGraphs {
  const orderElements = state.order.filter(
    (collection) =>
      collection.type === "container" ||
      collection.type === "obstacle" ||
      collection.type === "velocityVector" ||
      collection.type === "accelerationVector" ||
      collection.type === "spring" ||
      collection.type === "rod" ||
      collection.type === "balls"
  )

  let ballGraphElement: Line_Chart | null = null
  const vectorGraphElement: VectorGraph[] = []
  const trajectoryGraphElement: TrajectoryGraph[] = []
  const linkGraphElement: LinkGraph[] = []

  orderElements.forEach((item) => {
    const collection = state[item.type].find(
      (element) => element.id === item.id
    )
    if (isCollection(collection, containerDefaultState)) {
      drawObject(graph, collection)
    } else if (isCollection(collection, obstacleDefaultState)) {
      drawObject(graph, collection)
    } else if (isCollection(collection, ballDefaultState)) {
      setTrajectoryGraph(collection, trajectoryGraphElement, graph)
      ballGraphElement = graph.addDataset("linechart")
      drawBalls(graph, ballGraphElement, state)
    } else if (isCollection(collection, vectorDefaultState)) {
      if (!collection.enable) return
      const field = graph.addDataset("vectorfield")
      vectorGraphElement.push({
        type: collection.type as "velocityVector" | "accelerationVector",
        id: collection.id,
        field
      })
      drawVectors(collection.type, state, collection, field)
    } else if (isCollection(collection, linkDefaultState)) {
      if (!collection.enable) return
      const dataset = graph.addDataset("linechart")
      linkGraphElement.push({
        type: collection.type as "rod" | "spring",
        id: collection.id,
        graph: dataset
      })
      drawLink(collection, state, dataset)
    }
  })

  // Fallback case, should never happen
  if (ballGraphElement == null) {
    ballGraphElement = graph
      .addDataset("linechart")
      .dataX([0])
      .dataY([0])
      .lineOpacity(0)
  }

  return {
    ballGraphElement,
    vectorGraphElement,
    trajectoryGraphElement,
    linkGraphElement
  }
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
    return newCoord
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
  const parameter = linspace(
    0,
    2 * Math.PI,
    import.meta.env.VITE_ELLIPSE_RESOLUTION
  )

  const centerCoords = [
    object.positionX + object.width / 2,
    object.positionY - object.height / 2
  ]

  const coords = parameter.map((t) => [
    a * Math.cos(t) + centerCoords[0],
    b * Math.sin(t) + centerCoords[1]
  ])

  return coords
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawBalls(
  graph: Graph2D,
  ballsGraph: Line_Chart,
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
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawVectors(
  vectorType: CollectionType,
  state: MainState,
  vectorState: VectorState,
  vectorGraph: Vector_Field
): void {
  const coordsX = state.balls[0].data.map((data) => data.positionX)
  const coordsY = state.balls[0].data.map((data) => data.positionY)
  const dataX: number[] = []
  const dataY: number[] = []

  if (vectorType === "velocityVector") {
    state.balls[0].data.forEach((ball) => {
      if (ball.fixed) {
        dataX.push(0)
        dataY.push(0)
        return
      }

      dataX.push(ball.velocityX)
      dataY.push(ball.velocityY)
    })
  }
  if (vectorType === "accelerationVector") {
    state.balls[0].data.forEach((ball) => {
      if (ball.fixed) {
        dataX.push(0)
        dataY.push(0)
        return
      }

      const [accelX, accelY] = computeForce(state, ball)

      dataX.push(accelX)
      dataY.push(accelY)
    })
  }

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

export function getVectorColor(
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

export function getVectorOpacity(
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

  const vectorSize =
    (vectorState.maxSize * maxMagnitude) / vectorState.maxSizeMagnitude

  return vectorSize >= 1 ? vectorSize : 0
}

// --------------------------------------------------------
// --------------------------------------------------------

function setTrajectoryGraph(
  collection: BallState,
  trajectoryGraphElement: TrajectoryGraph[],
  graph: Graph2D
): void {
  if (collection.trajectoryEnable) {
    collection.data.forEach((ball) => {
      if (ball.trajectoryLength > 0 && !ball.fixed)
        trajectoryGraphElement.push({
          id: ball.id,
          graph: graph.addDataset("linechart")
        })
    })
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function drawLink(
  collection: SpringState | RodState,
  state: MainState,
  dataset: Line_Chart
): void {
  const [dataX, dataY] = getLinkData(collection, state)

  dataset
    .dataX(dataX)
    .dataY(dataY)
    .lineOpacity((_, __, index) => (index % 2 === 0 ? 0 : 1))
    .lineColor(collection.color)
    .lineOpacity(collection.opacity)
    .lineWidth(2)
    .lineStyle(collection.type === "spring" ? "long-dash" : "solid")
}

// --------------------------------------------------------
// --------------------------------------------------------

export function getLinkData(
  collection: SpringState | RodState,
  state: MainState
): [number[], number[]] {
  const dataX: number[] = []
  const dataY: number[] = []

  collection.linkBall.forEach((pair) => {
    const ballA = state.balls[0].data.find((element) => element.id === pair[0])
    const ballB = state.balls[0].data.find((element) => element.id === pair[1])

    if (ballA == null || ballB == null) return

    dataX.push(ballA.positionX)
    dataY.push(ballA.positionY)
    dataX.push(ballB.positionX)
    dataY.push(ballB.positionY)
  })

  return [dataX, dataY]
}

// --------------------------------------------------------
