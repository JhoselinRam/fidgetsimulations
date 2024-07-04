import useVectorCustomGradient from "../../../../../hooks/useVectorCustomGradient/useVectorCustomGradient"
import GradientInput from "../../../../GradientInput/GradientInput"
import SimpleGradientShow from "../SimpleGradientShow/SimpleGradientShow"
import type { CustomGradientControlProps } from "./CustomGradientControl_types"

function CustomGradientControl({
  type,
  isDisabled
}: CustomGradientControlProps): JSX.Element {
  const { gradientType, gradientSpace, gradientStopsHooks } =
    useVectorCustomGradient(type)

  return (
    <div className="flex justify-center">
      {gradientType === "custom" ? (
        <GradientInput
          isDisabled={isDisabled}
          {...gradientSpace}
          {...gradientStopsHooks}
        />
      ) : (
        <SimpleGradientShow
          gradientType={gradientType}
          isDisabled={isDisabled}
        />
      )}
    </div>
  )
}

export default CustomGradientControl
