import type { GradientFormColorProps } from "../GradientFormColor/GradientFormColor_types"
import type { GradientFormSelectProps } from "../GradientFormSelect/GradientFormSelect_types"
import type { GradientSelectKnobProps } from "../GradientSelectKnob/GradientSelectKnob_types"

export interface GradientConfigFormProps
  extends GradientFormSelectProps,
    GradientFormColorProps,
    GradientSelectKnobProps {}
