import type { SimpleState } from "../../../useMainState/useMainState_types"

export interface UseOpacityRange {
  minValueHooks: OpacityRangeHooks
  maxValueHooks: OpacityRangeHooks
}

export interface OpacityRangeHooks extends SimpleState<number> {
  isDisabled: boolean
}

export type OpacityRangeOption = "value" | "magnitude"

export type RangeOpacitySelector<A, B> = {
  [k in OpacityRangeOption]: k extends "value"
    ? A
    : k extends "magnitude"
      ? B
      : never
}

export type OpacityMinRangeSelector = RangeOpacitySelector<
  "minOpacity",
  "minOpacityMagnitude"
>
export type OpacityMinActionSelector = RangeOpacitySelector<
  "vector@minOpacity",
  "vector@minOpacityMagnitude"
>
export type OpacityMaxRangeSelector = RangeOpacitySelector<
  "maxOpacity",
  "maxOpacityMagnitude"
>
export type OpacityMaxActionSelector = RangeOpacitySelector<
  "vector@maxOpacity",
  "vector@maxOpacityMagnitude"
>
