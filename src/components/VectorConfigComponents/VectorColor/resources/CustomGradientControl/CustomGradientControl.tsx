import GradientInput from "../../../../GradientInput/GradientInput"
import SimpleGradientShow from "../SimpleGradientShow/SimpleGradientShow"
import type { CustomGradientControlProps } from "./CustomGradientControl_types"

function CustomGradientControl({
  isDisabled,
  spaceHooks,
  stopsHooks,
  gradientType
}: CustomGradientControlProps): JSX.Element {
  return (
    <div className="flex justify-center">
      {gradientType === "custom" ? (
        <GradientInput
          isDisabled={isDisabled}
          outerSpace={spaceHooks.value}
          onOuterSpaceChange={spaceHooks.onChange}
          value={stopsHooks.value}
          onChange={stopsHooks.onChange}
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
