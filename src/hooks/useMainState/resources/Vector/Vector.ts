import type { ReducerSlice } from "../../useMainState_types"
import type {
  ValidPayloadType,
  VectorState,
  VectorStateKeys
} from "./Vector_types"
import { vectorDefaultState } from "./defaultState"

export const vectorEnable = generateVectorSlice("enable")
export const vectorColorMode = generateVectorSlice("colorMode")
export const vectorOpacityMode = generateVectorSlice("opacityMode")
export const vectorGradientType = generateVectorSlice("gradientType")
export const vectorNormalize = generateVectorSlice("normalize")
export const vectorColor = generateVectorSlice("color")
export const vectorGradientStops = generateVectorSlice("gradientStops")
export const vectorGradientSpace = generateVectorSlice("gradientSpace")
export const vectorMinColorMagnitude = generateVectorSlice("minColorMagnitude")
export const vectorMaxColorMagnitude = generateVectorSlice("maxColorMagnitude")
export const vectorMaxSize = generateVectorSlice("maxSize")
export const vectorMaxSizeMagnitude = generateVectorSlice("maxSizeMagnitude")
export const vectorOpacity = generateVectorSlice("opacity")
export const vectorMaxOpacity = generateVectorSlice("maxOpacity")
export const vectorMinOpacity = generateVectorSlice("minOpacity")
export const vectorMaxOpacityMagnitude = generateVectorSlice(
  "maxOpacityMagnitude"
)
export const vectorMinOpacityMagnitude = generateVectorSlice(
  "minOpacityMagnitude"
)

// --------------------------------------------------------
// ---------------- Generator Function --------------------

function generateVectorSlice(prop: VectorStateKeys): ReducerSlice {
  return (state, payload) => {
    if (!isValidPayload(payload, prop, vectorDefaultState)) return state

    const newState = { ...state }
    ;(newState[payload.id][prop] as unknown) = payload[prop]

    return newState
  }
}

// --------------------------------------------------------
// --------------------------------------------------------

function isValidPayload<T extends VectorStateKeys>(
  data: unknown,
  prop: T,
  sampleState: VectorState
): data is ValidPayloadType<T> {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data)) return false
  if (typeof data.id !== "string") return false
  if (data.id !== "velocityVector" && data.id !== "accelerationVector")
    return false
  if (!(prop in data)) return false

  const key = prop as keyof typeof data
  if (typeof data[key] !== typeof sampleState[prop]) return false

  return true
}

// --------------------------------------------------------
