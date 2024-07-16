import {
  createSimpleSlice,
  isCollectionType,
  isInCollection
} from "../../useMainState"
import type { CollectionOrder, MainState } from "../../useMainState_types"
import type { LinkBallArray, LinkStateKeys } from "./Link_types"

export const linkLength = createSimpleSlice<LinkStateKeys>("length", [
  "spring",
  "rod"
])
export const linkColor = createSimpleSlice<LinkStateKeys>("color", [
  "spring",
  "rod"
])
export const linkOpacity = createSimpleSlice<LinkStateKeys>("opacity", [
  "spring",
  "rod"
])

export function linkBall(
  state: MainState,
  payload: Record<string, unknown>
): MainState {
  if (!isLinkBallPayload(payload)) return state
  if (!isInCollection(payload.id, payload.type, state)) return state
  if (payload.type !== "spring" && payload.type !== "rod") return state

  const index = state[payload.type].findIndex((link) => link.id === payload.id)

  const newState = { ...state }
  newState[payload.type][index].linkBall = payload.linkBall

  return newState
}

// --------------------------------------------------------
// --------------------------------------------------------

function isLinkBallPayload(
  data: unknown
): data is CollectionOrder & { linkBall: LinkBallArray } {
  if (data == null) return false
  if (typeof data !== "object") return false
  if (!("id" in data) || !("type" in data) || !("linkBall" in data))
    return false
  if (
    typeof data.id !== "string" ||
    typeof data.type !== "string" ||
    !Array.isArray(data.linkBall)
  )
    return false

  if (!isCollectionType(data.type)) return false
  if (!isLinkBall(data.linkBall)) return false

  return true
}

function isLinkBall(data: unknown[]): data is LinkBallArray {
  let isValidLinkBall = true

  data.forEach((candidate) => {
    if (!isLinkBallElement(candidate)) isValidLinkBall = false
  })

  return isValidLinkBall
}

function isLinkBallElement(data: unknown): data is readonly [string, string] {
  if (!Array.isArray(data)) return false
  if (data.length !== 2) return false
  if (typeof data[0] !== "string" && typeof data[1] !== "string") return false

  return true
}
