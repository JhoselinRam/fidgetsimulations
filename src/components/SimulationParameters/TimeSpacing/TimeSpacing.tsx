import useTimeSpacing from "../../../hooks/useTimeSpacing/useTimeSpacing"
import ConfigSection from "../../ConfigSection/ConfigSection"
import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"

function TimeSpacing(): JSX.Element {
  const { delay, delayCallback, dt, dtCallback } = useTimeSpacing()
  return (
    <ConfigSection.Section>
      <span className="flex flex-row gap-2 content-center">
        <NumberInput
          step={0.001}
          unit="ms"
          className="gap-7"
          minValue={0.0001}
          formatOptions={{ maximumFractionDigits: 4 }}
          value={dt}
          onChange={dtCallback}
        >
          dt:
        </NumberInput>
        <Info placement="right" crossOffset={50}>
          <p>The size of the time step inside the simulation.</p>
          <p className="mt-3">
            The smaller this value, the more accurate the simulation will be,
            but more data points will be generated and will take longer to
            render.
          </p>
        </Info>
      </span>
      <span className="flex flex-row gap-2 content-center">
        <NumberInput
          unit="ms"
          minValue={0}
          step={0.1}
          formatOptions={{ maximumFractionDigits: 0 }}
          value={delay}
          onChange={delayCallback}
        >
          delay:
        </NumberInput>
        <Info placement="right" crossOffset={40}>
          <p>
            The amount of time (in milliseconds) between each animation frame.
          </p>
          <p className="mt-3">Helpful when the animation renders too fast.</p>
        </Info>
      </span>
    </ConfigSection.Section>
  )
}

export default TimeSpacing
