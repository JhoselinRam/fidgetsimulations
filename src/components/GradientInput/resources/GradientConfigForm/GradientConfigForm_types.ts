import type { GradientFormColorProps } from "../GradientFormColor/GradientFormColor_types"
import type { GradientFormDeleteProps } from "../GradientFormDelete/GradientFormDelete_types"
import type { GradientFormPositionProps } from "../GradientFormPosition/GradientFormPosition_types"
import type { GradientFormSelectProps } from "../GradientFormSelect/GradientFormSelect_types"
import type { GradientSelectKnobProps } from "../GradientSelectKnob/GradientSelectKnob_types"

export interface GradientConfigFormProps
  extends GradientFormSelectProps,
    GradientFormColorProps,
    GradientSelectKnobProps,
    GradientFormPositionProps,
    GradientFormDeleteProps {}
