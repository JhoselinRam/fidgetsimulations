import useSimpleGradientShow from "../../../../../hooks/useSimpleGradientShow/useSimpleGradientShot"
import type { SimpleGradientShowProps } from "./simpleGradientShow_types"

function SimpleGradientShow({
  gradientType,
  isDisabled
}: SimpleGradientShowProps): JSX.Element {
  const { colorSteps } = useSimpleGradientShow(gradientType)

  return (
    <div
      className={`w-full max-w-48 h-6 border flex flex-row ${
        isDisabled != null && isDisabled
          ? "border-zinc-600 opacity-30"
          : "border-tuatara-500 opacity-100"
      }`}
      style={{
        backgroundColor:
          isDisabled != null && isDisabled
            ? "black"
            : colorSteps[colorSteps.length - 1]
      }}
    >
      {colorSteps.map((color, index) => (
        <div
          key={`${color}${index}`}
          style={{ backgroundColor: color }}
          className="h-full w-full"
        ></div>
      ))}
    </div>
  )
}

export default SimpleGradientShow
