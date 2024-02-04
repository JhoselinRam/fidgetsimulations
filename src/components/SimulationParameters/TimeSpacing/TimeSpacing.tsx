import Info from "../../Info/Info"
import NumberInput from "../../NumberInput/NumberInput"

function TimeSpacing(): JSX.Element {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <span className="flex flex-row gap-2 content-center">
        <NumberInput step={0.001} unit="s" className="gap-7" minValue={0.0001}>
          dt:
        </NumberInput>
        <Info>
          <p>The size of the time step inside the simulation.</p>
          <p className="mt-3">
            The smaller this value the simulation will be more accurate, but
            more data points will be generated and the simulation will take
            longer and render slower
          </p>
        </Info>
      </span>
      <span className="flex flex-row gap-2 content-center">
        <NumberInput unit="ms">delay:</NumberInput>
        <Info>
          <p>
            The amount of time (in milliseconds) between each animation frame.
          </p>
          <p className="mt-3">Helpful when the animation renders too fast.</p>
        </Info>
      </span>
    </div>
  )
}

export default TimeSpacing
