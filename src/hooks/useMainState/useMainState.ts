import { createContext, useReducer } from "react"
import type {
  CollectionElementState,
  CollectionOrder,
  CollectionState,
  CollectionType,
  MainState,
  MainStateAction,
  ReducerObject,
  ReducerSlice,
  UseMainState,
  ValidStaticPayloadType
} from "./useMainState_types"
import {
  graphicAspectRatio,
  graphicBackground,
  graphicColorX,
  graphicColorY,
  graphicElementHeight,
  graphicElementLockRatio,
  graphicElementManualEdit,
  graphicElementPositionX,
  graphicElementPositionY,
  graphicElementWidth,
  graphicEndX,
  graphicEndY,
  graphicGridPrimaryColor,
  graphicGridPrimaryEnable,
  graphicGridSecondaryColor,
  graphicGridSecondaryEnable,
  graphicOpacityX,
  graphicOpacityY,
  graphicStartX,
  graphicStartY
} from "./resources/GraphicElement/GraphicElement"
import initialState from "./initialState"
import {
  timeParameterContinuous,
  timeParameterDT,
  timeParameterDelay,
  timeParameterTime
} from "./resources/TimeParameters/TimeParameters"
import { linechartNew } from "./resources/Linechart/Linechart"
import { dataOutputNew } from "./resources/DataOutput/DataOutput"
import {
  collectionDelete,
  collectionRename,
  collectionReorder
} from "./resources/Collection/Collection"
import type {
  GraphicElementType,
  GraphicalCollection
} from "./resources/GraphicElement/GraphicElement_types"
import {
  containerAngle,
  containerBorderColor,
  containerBorderOpacity,
  containerBorderWidth,
  containerFillColor,
  containerFillOpacity,
  containerHeight,
  containerNew,
  containerPositionX,
  containerPositionY,
  containerRatioLock,
  containerShape,
  containerWidth
} from "./resources/Container/Container"
import {
  obstacleAngle,
  obstacleBorderColor,
  obstacleBorderOpacity,
  obstacleBorderWidth,
  obstacleFillColor,
  obstacleFillOpacity,
  obstacleHeight,
  obstacleNew,
  obstaclePositionX,
  obstaclePositionY,
  obstacleRatioLock,
  obstacleShape,
  obstacleWidth
} from "./resources/Obstacle/Obstacle"
import {
  localGravityMagnitudeX,
  localGravityMagnitudeY,
  localGravityNew
} from "./resources/LocalGravity/LocalGravity"
import { simpleForceMagnitude } from "./resources/SimpleForce/SimpleForce"
import { gravityNew } from "./resources/Gravity/Gravity"
import { dragDensity, dragNew } from "./resources/Drag/Drag"
import { electricNew } from "./resources/Electric/Electric"
import type { BallData, BallDataKeys } from "./resources/Balls/Balls_types"
import { ballDataDefaultState } from "./resources/Balls/defaultState"
import {
  ballAccelX,
  ballAccelY,
  ballCharge,
  ballCollision,
  ballColor,
  ballDelete,
  ballLastPositionX,
  ballLastPositionY,
  ballMass,
  ballName,
  ballNew,
  ballPositionX,
  ballPositionY,
  ballRadius,
  ballTrajectoryColor,
  ballTrajectoryEnable,
  ballTrajectoryFade,
  ballTrajectoryLength,
  ballTrajectoryMatchColor,
  ballTrajectoryOpacity,
  ballUpdate,
  ballUpdateAll,
  ballVelocityX,
  ballVelocityY
} from "./resources/Balls/Balls"
import {
  vectorColor,
  vectorColorMode,
  vectorEnable,
  vectorGradientSpace,
  vectorGradientStops,
  vectorGradientType,
  vectorMaxColorMagnitude,
  vectorMaxOpacity,
  vectorMaxOpacityMagnitude,
  vectorMaxSize,
  vectorMaxSizeMagnitude,
  vectorMinColorMagnitude,
  vectorMinOpacity,
  vectorMinOpacityMagnitude,
  vectorNormalize,
  vectorOpacity,
  vectorOpacityMode
} from "./resources/Vector/Vector"
import { simulationRun } from "./resources/Simulation/Simulation"
import { dampingNew } from "./resources/Damping/Damping"
import { accelerationVectorNew } from "./resources/AccelerationVector/AccelerationVector"
import { VelocityVectorNew } from "./resources/VelocityVector/VelocityVector"

// -------------------- Hook body -------------------------

export default function useMainState(): UseMainState {
  const [mainState, dispatch] = useReducer(reducer, initialState)

  return {
    mainState,
    dispatch
  }
}

// --------------------------------------------------------
// ------------------ Reducer Object ----------------------

const reducerObject: ReducerObject = {
  "collection@delete": collectionDelete,
  "collection@name": collectionRename,
  "collection@reorder": collectionReorder,
  "graphic@positionX": graphicElementPositionX,
  "graphic@positionY": graphicElementPositionY,
  "graphic@width": graphicElementWidth,
  "graphic@height": graphicElementHeight,
  "graphic@manualEdit": graphicElementManualEdit,
  "graphic@lockRatio": graphicElementLockRatio,
  "graphic@startX": graphicStartX,
  "graphic@startY": graphicStartY,
  "graphic@endX": graphicEndX,
  "graphic@endY": graphicEndY,
  "graphic@aspectRatio": graphicAspectRatio,
  "graphic@background": graphicBackground,
  "graphic@colorX": graphicColorX,
  "graphic@opacityX": graphicOpacityX,
  "graphic@colorY": graphicColorY,
  "graphic@opacityY": graphicOpacityY,
  "graphic@gridPrimaryEnable": graphicGridPrimaryEnable,
  "graphic@gridPrimaryColor": graphicGridPrimaryColor,
  "graphic@gridSecondaryEnable": graphicGridSecondaryEnable,
  "graphic@gridSecondaryColor": graphicGridSecondaryColor,
  "time@continuous": timeParameterContinuous,
  "time@time": timeParameterTime,
  "time@dt": timeParameterDT,
  "time@delay": timeParameterDelay,
  "linechart@new": linechartNew,
  "dataoutput@new": dataOutputNew,
  "container@new": containerNew,
  "container@positionX": containerPositionX,
  "container@positionY": containerPositionY,
  "container@width": containerWidth,
  "container@height": containerHeight,
  "container@borderColor": containerBorderColor,
  "container@borderOpacity": containerBorderOpacity,
  "container@borderWidth": containerBorderWidth,
  "container@fillColor": containerFillColor,
  "container@fillOpacity": containerFillOpacity,
  "container@shape": containerShape,
  "container@angle": containerAngle,
  "container@ratioLock": containerRatioLock,
  "obstacle@new": obstacleNew,
  "obstacle@positionX": obstaclePositionX,
  "obstacle@positionY": obstaclePositionY,
  "obstacle@width": obstacleWidth,
  "obstacle@height": obstacleHeight,
  "obstacle@borderColor": obstacleBorderColor,
  "obstacle@borderOpacity": obstacleBorderOpacity,
  "obstacle@borderWidth": obstacleBorderWidth,
  "obstacle@fillColor": obstacleFillColor,
  "obstacle@fillOpacity": obstacleFillOpacity,
  "obstacle@shape": obstacleShape,
  "obstacle@angle": obstacleAngle,
  "obstacle@ratioLock": obstacleRatioLock,
  "localGravity@new": localGravityNew,
  "localGravity@magnitudeX": localGravityMagnitudeX,
  "localGravity@magnitudeY": localGravityMagnitudeY,
  "simpleForce@magnitude": simpleForceMagnitude,
  "gravity@new": gravityNew,
  "drag@new": dragNew,
  "drag@density": dragDensity,
  "electric@new": electricNew,
  "damping@new": dampingNew,
  "balls@new": ballNew,
  "ball@update": ballUpdate,
  "ball@updateAll": ballUpdateAll,
  "balls@positionX": ballPositionX,
  "balls@positionY": ballPositionY,
  "balls@lastPositionX": ballLastPositionX,
  "balls@lastPositionY": ballLastPositionY,
  "balls@velocityX": ballVelocityX,
  "balls@velocityY": ballVelocityY,
  "balls@accelX": ballAccelX,
  "balls@accelY": ballAccelY,
  "balls@mass": ballMass,
  "balls@charge": ballCharge,
  "balls@radius": ballRadius,
  "balls@name": ballName,
  "balls@color": ballColor,
  "balls@collision": ballCollision,
  "balls@trajectoryEnable": ballTrajectoryEnable,
  "balls@delete": ballDelete,
  "balls@trajectoryMatchColor": ballTrajectoryMatchColor,
  "balls@trajectoryFade": ballTrajectoryFade,
  "balls@trajectoryOpacity": ballTrajectoryOpacity,
  "balls@trajectoryColor": ballTrajectoryColor,
  "balls@trajectoryLength": ballTrajectoryLength,
  "vector@enable": vectorEnable,
  "vector@colorMode": vectorColorMode,
  "vector@opacityMode": vectorOpacityMode,
  "vector@gradientType": vectorGradientType,
  "vector@normalize": vectorNormalize,
  "vector@gradientStops": vectorGradientStops,
  "vector@gradientSpace": vectorGradientSpace,
  "vector@color": vectorColor,
  "vector@minColorMagnitude": vectorMinColorMagnitude,
  "vector@maxColorMagnitude": vectorMaxColorMagnitude,
  "vector@maxSize": vectorMaxSize,
  "vector@maxSizeMagnitude": vectorMaxSizeMagnitude,
  "vector@opacity": vectorOpacity,
  "vector@maxOpacity": vectorMaxOpacity,
  "vector@minOpacity": vectorMinOpacity,
  "vector@maxOpacityMagnitude": vectorMaxOpacityMagnitude,
  "vector@minOpacityMagnitude": vectorMinOpacityMagnitude,
  "accelerationVector@new": accelerationVectorNew,
  "velocityVector@new": VelocityVectorNew,
  "simulation@run": simulationRun
}

// --------------------------------------------------------
// ----------------- Reducer function ---------------------

function reducer(state: MainState, action: MainStateAction): MainState {
  return reducerObject[action.type](state, action.payload)
}

// --------------------------------------------------------
// ---------------- Main State Context --------------------order

export const mainStateContext = createContext<UseMainState>({
  mainState: initialState,
  dispatch: () => false
})

// --------------------------------------------------------
// ------- Check if the collection is in the list ---------

export function isInCollection(
  id: string,
  type: CollectionType,
  state: MainState
): boolean {
  const index = state.order.findIndex(
    (item) => item.id === id && item.type === type
  )

  return index !== -1
}

// --------------------------------------------------------
// ----- Check if a string is a valid collection type -----

export function isCollectionType(type: string): type is CollectionType {
  return (
    type === "simulationWindow" ||
    type === "linechart" ||
    type === "dataoutput" ||
    type === "container" ||
    type === "obstacle" ||
    type === "balls" ||
    type === "localGravity" ||
    type === "gravity" ||
    type === "drag" ||
    type === "electric" ||
    type === "velocityVector" ||
    type === "accelerationVector" ||
    type === "damping"
  )
}

// --------------------------------------------------------
// -- Checks if the data is a valid collection order type --

export function isCollectionOrder(data: unknown): data is CollectionOrder {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data) || !("type" in data)) return false
  if (typeof data.id !== "string" || typeof data.type !== "string") return false

  return true
}

// --------------------------------------------------------
// -- Checks if the data is a valid collection state type -

export function isCollectionState(data: unknown): data is CollectionState {
  if (!isCollectionOrder(data)) return false
  if (!("name" in data)) return false
  if (typeof data.name !== "string") return false

  return true
}

// --------------------------------------------------------
// - Checks if the type is part of the graphical elements -

export function isGraphicalCollection(
  type: CollectionType
): type is GraphicElementType {
  return (
    type === "simulationWindow" || type === "linechart" || type === "dataoutput"
  )
}

// --------------------------------------------------------
// --------- Returns a given graphical collection ---------

export function getGraphicalCollection(
  item: CollectionOrder,
  state: MainState
): GraphicalCollection | undefined {
  if (!isCollectionOrder(item)) return
  if (!isGraphicalCollection(item.type)) return
  if (!isInCollection(item.id, item.type, state)) return

  return state[item.type].find(
    (collection) => collection.id === item.id && collection.type === item.type
  )
}

// --------------------------------------------------------
// -- Checks if the data is a valid collection state type -

// Checks if the payload contains all the necessary data
export function isCollection<T extends CollectionElementState | BallData>(
  data: unknown,
  keyState: T
): data is T {
  if (data == null) return false
  if (typeof data !== "object") return false

  const stateKeys = Object.keys(keyState)
  let keysInData = true

  stateKeys.forEach((key) => {
    if (key in data) return
    keysInData = false
  })

  return keysInData
}

// --------------------------------------------------------
// --------------------------------------------------------
export function getCollection<T>(
  item: CollectionOrder,
  state: MainState,
  type: CollectionType[]
): T | undefined
export function getCollection<T>(
  item: CollectionOrder,
  state: MainState,
  type: CollectionType
): T | undefined
export function getCollection<T>(
  item: CollectionOrder,
  state: MainState,
  type: CollectionType | CollectionType[]
): T | undefined {
  if (!isCollectionOrder(item)) return
  if (!isInCollection(item.id, item.type, state)) return
  if (typeof type === "string" && item.type !== type) return
  if (typeof type === "object") {
    if (!Array.isArray(type)) return
    let isValidType = false

    type.forEach((option) => {
      if (item.type === option) isValidType = true
    })
    if (!isValidType) return
  }

  return state[item.type].find(
    (collection) => collection.id === item.id && collection.type === item.type
  ) as T | undefined
}

// --------------------------------------------------------
// --- Creates a dispatch slice for simple valued states --
export function createSimpleSlice<KeyType extends string>(
  key: KeyType,
  type: CollectionType
): ReducerSlice
export function createSimpleSlice<KeyType extends string>(
  key: KeyType,
  type: CollectionType[]
): ReducerSlice
export function createSimpleSlice<KeyType extends string>(
  key: KeyType,
  type: CollectionType | CollectionType[]
): ReducerSlice {
  return (state, payload) => {
    // ----------- Guard conditions ---------------
    // Makes sure the payload contains the necessary data
    if (!isCollectionOrder(payload)) return state
    if (!isInCollection(payload.id, payload.type, state)) return state
    if (typeof type === "string" && payload.type !== type) return state
    if (Array.isArray(type)) {
      let isValidType = false
      type.forEach((option) => {
        if (payload.type === option) isValidType = true
      })
      if (!isValidType) return state
    }
    if (!(key in payload)) return state

    const index = state[payload.type].findIndex(
      (collection) =>
        collection.id === payload.id && collection.type === payload.type
    )
    const collection = state[payload.type][index]

    // Checks if the key exist in the collection
    if (!(key in collection)) return state
    const validKey = key as keyof typeof collection

    // Check if the data actually change
    if (typeof payload[validKey] !== typeof collection[validKey]) return state

    if (payload[validKey] === collection[validKey]) return state

    // Generate the new state
    const newState = { ...state }
    ;(newState[payload.type][index][validKey] as unknown) = payload[validKey]

    return newState
  }
}

// --------------------------------------------------------
// - Creates a new collection slice for simple collections -

export function createSimpleNewCollectionSlice<
  T extends CollectionElementState
>(type: CollectionType, sampleState: T): ReducerSlice {
  return (state, payload) => {
    if (!isCollection(payload, sampleState)) return state
    if (payload.type === "simulationWindow" || payload.type === "balls")
      return state
    if (isInCollection(payload.id, payload.type, state)) return state

    const newState = { ...state }

    ;(newState[type] as T[]).push(payload)
    newState.order.push({
      id: payload.id,
      type
    })

    return newState
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

export function isBallIdentifier(data: unknown, key: BallDataKeys): boolean {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data)) return false
  if (typeof data.id !== "string") return false
  if (!(key in data)) return false

  const validKey = key as keyof typeof data
  if (typeof data[validKey] !== typeof ballDataDefaultState[key]) return false

  return true
}

// --------------------------------------------------------
// --------------------------------------------------------

export function generateStaticSlice<
  ID extends keyof MainState,
  S extends MainState[ID],
  T extends keyof S
>(id: ID, sampleState: S, prop: T): ReducerSlice
export function generateStaticSlice<
  ID extends keyof MainState,
  S extends MainState[ID],
  T extends keyof S
>(id: ID[], sampleState: S, prop: T): ReducerSlice
export function generateStaticSlice<
  ID extends keyof MainState,
  S extends MainState[ID],
  T extends keyof S
>(id: ID | ID[], sampleState: S, prop: T): ReducerSlice {
  return (state, payload) => {
    if (!isValidStaticPayload(payload, sampleState, prop, id)) return state
    if (typeof payload.id !== "string") return state

    const usedProp = prop as unknown as keyof MainState[ID]
    if ((state[payload.id][usedProp] as unknown) === payload[prop]) return state

    const newState = { ...state }
    ;(newState[payload.id][usedProp] as unknown) = payload[prop]

    return newState
  }
}

export function isValidStaticPayload<S, T extends keyof S, ID>(
  data: unknown,
  sampleState: S,
  prop: T,
  validId: ID
): data is ValidStaticPayloadType<S, T, ID>
export function isValidStaticPayload<S, T extends keyof S, ID>(
  data: unknown,
  sampleState: S,
  prop: T,
  validId: ID[]
): data is ValidStaticPayloadType<S, T, ID>
export function isValidStaticPayload<S, T extends keyof S, ID>(
  data: unknown,
  sampleState: S,
  prop: T,
  validId: ID | ID[]
): data is ValidStaticPayloadType<S, T, ID> {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data)) return false
  if (typeof data.id !== "string") return false

  let isValidId = false
  if (typeof validId === "string") {
    if (data.id !== validId) return false
    isValidId = true
  }
  if (Array.isArray(validId)) {
    validId.forEach((id) => {
      if (typeof id !== "string") return
      if (data.id === id) isValidId = true
    })
  }
  if (!isValidId) return false
  if (!(prop in data)) return false

  const key = prop as keyof typeof data
  if (typeof data[key] !== typeof sampleState[prop]) return false

  return true
}

// --------------------------------------------------------
// --------------------------------------------------------

export function isBallArray(data: unknown): data is { data: BallData[] } {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("data" in data)) return false
  if (!Array.isArray(data.data)) return false

  let isValidArray = true
  data.data.forEach((item) => {
    if (!isCollection<BallData>(item, ballDataDefaultState))
      isValidArray = false
  })

  return isValidArray
}

// --------------------------------------------------------
// --------------------------------------------------------

export function containAllBalls(data: BallData[], state: MainState): boolean {
  const dataIds = data.map((item) => item.id)
  const dataSet = new Set(dataIds)
  const stateSet = new Set(state.balls[0].data.map((item) => item.id))

  return (
    dataSet.size === stateSet.size && dataIds.every((id) => stateSet.has(id))
  )
}

// --------------------------------------------------------
