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
  UseMainState
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
import { dragNew } from "./resources/Drag/Drag"
import { electricNew } from "./resources/Electric/Electric"
import type { BallData, BallDataKeys } from "./resources/Balls/Balls_types"
import { ballDataDefaultState } from "./resources/Balls/defaultState"
import {
  ballAccelX,
  ballAccelY,
  ballCharge,
  ballCollision,
  ballColor,
  ballLastPositionX,
  ballLastPositionY,
  ballMass,
  ballName,
  ballNew,
  ballPositionX,
  ballPositionY,
  ballRadius,
  ballUpdate,
  ballVelocityX,
  ballVelocityY
} from "./resources/Balls/Balls"

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
  "electric@new": electricNew,
  "balls@new": ballNew,
  "ball@update": ballUpdate,
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
  "balls@collision": ballCollision
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
    type === "electric"
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

    // if (typeof payload[validKey] === "number") {
    //   ;(payload[validKey] as number) = toRounded(
    //     payload[validKey] as number,
    //     import.meta.env.VITE_ROUNDED_DECIMALS
    //   )
    // }

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
