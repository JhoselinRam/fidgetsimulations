import useSimpleGradientShow from "../../../../../hooks/useSimpleGradientShow/useSimpleGradientShot"
import type { SimpleGradientShowProps } from "./simpleGradientShow_types"

function SimpleGradientShow({
  gradientType
}: SimpleGradientShowProps): JSX.Element {
  const { colorSteps } = useSimpleGradientShow(gradientType)

  return (
    <div className="w-full max-w-48 h-6 border border-tuatara-500 flex flex-row">
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
