import useVectorCustomGradient from "../../../../../hooks/useVectorCustomGradient/useVectorCustomGradient"
import GradientInput from "../../../../GradientInput/GradientInput"
import SimpleGradientShow from "../SimpleGradientShow/SimpleGradientShow"
import type { CustomGradientControlProps } from "./CustomGradientControl_types"

function CustomGradientControl({
  type
}: CustomGradientControlProps): JSX.Element {
  const { gradientType, gradientSpace, gradientStopsHooks } =
    useVectorCustomGradient(type)

  return (
    <>
      {gradientType === "custom" ? (
        <GradientInput {...gradientSpace} {...gradientStopsHooks} />
      ) : (
        <SimpleGradientShow gradientType={gradientType} />
      )}
    </>
  )
}

export default CustomGradientControl
