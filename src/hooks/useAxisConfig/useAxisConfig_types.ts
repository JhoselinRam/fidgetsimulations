import type { Dispatch, SetStateAction } from "react"
import type {
  AxisDomain,
  DomainActionType
} from "../useMainState/resources/GraphicElement/GraphicElement_types"

export interface UseAxisConfig {
  axisHooks: AxisHooks
  linkHooks: LinkHooks
  manualControlPress: () => void
}

export interface AxisHooks {
  x: AxisHookProps
  y: AxisHookProps
}

export interface LinkHooks {
  isSelected: boolean
  onChange: (value: boolean) => void
}

export interface AxisHookProps {
  start: number
  end: number
  changeStart: (newStart: number) => void
  changeEnd: (newEnd: number) => void
  coupleHooks: CoupleHooks
}

export interface CoupleHooks {
  couple: boolean
  setCouple: (value: boolean) => void
  zoom: boolean
  setZoom: (value: boolean) => void
}

export type ActionByProp = {
  [k in keyof AxisDomain]: DomainActionType
}

export type SetByProp = {
  [k in keyof AxisDomain]: Dispatch<SetStateAction<number>>
}

export interface LinkCallbackProps extends ComplementProps {
  currentValue: number
  currentOpposite: number
  oppositeProp: keyof AxisDomain
  oppositeAction: DomainActionType
  setOpposite: (value: number) => void
}

export interface ComplementProps {
  complementStart: number
  complementEnd: number
  complementStartProp: "startX" | "startY"
  complementStartAction: "graphic@startX" | "graphic@startY"
  setComplementStart: (value: number) => void
  complementEndProp: "endX" | "endY"
  setComplementEnd: (value: number) => void
  complementEndAction: "graphic@endX" | "graphic@endY"
}
