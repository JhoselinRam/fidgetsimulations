import useDensityControl from "../../../hooks/useDensityControl/useDensityControl"
import ConfigSection from "../../ConfigSection/ConfigSection"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"
import type { DensityControlProps } from "./DensityControl_types"

function DensityControl({ item }: DensityControlProps): JSX.Element {
  const densityHooks = useDensityControl(item)

  return (
    <ConfigSection.Section className="!flex-row">
      <NumberInput
        minValue={0}
        unit={
          <span>
            km/m<sup>3</sup>
          </span>
        }
        step={0.01}
        {...densityHooks}
      >
        ρ
      </NumberInput>
      <Info placement="left" crossOffset={10}>
        The mass density of the medium.
      </Info>
    </ConfigSection.Section>
  )
}

export default DensityControl
