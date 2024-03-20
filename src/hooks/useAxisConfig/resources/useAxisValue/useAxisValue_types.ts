export interface UseAxisValue {
  start: number
  end: number
  changeStart: (newStart: number) => void
  changeEnd: (newEnd: number) => void
  coupleHooks: CoupleHooks
}

export interface AxisProps {
  startProp: "startX" | "startY"
  endProp: "endX" | "endY"
  startAction: "graphic@startX" | "graphic@startY"
  endAction: "graphic@endX" | "graphic@endY"
  complementStartProp: "startX" | "startY"
  complementEndProp: "endX" | "endY"
  complementStartAction: "graphic@startX" | "graphic@startY"
  complementEndAction: "graphic@endX" | "graphic@endY"
}

export interface CoupleHooks {
  couple: boolean
  setCouple: (value: boolean) => void
  zoom: boolean
  setZoom: (value: boolean) => void
}
