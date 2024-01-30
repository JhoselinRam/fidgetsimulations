import Info from "../../Info/Info"
import Switch from "../../Switch/Switch"

function ParametersForm(): JSX.Element {
  return (
    <>
      <span className="flex flex-row gap-2 content-center">
        Simulation time:
        <Info placement="right" crossOffset={30} defaultOpen>
          <p>
            The amount of time to be simulated. If set to
            &quot;continuous&quot;, the simulation will run indefinitely
          </p>
          <p className="mt-3">
            The time that is simulated does not correspond to the actual time in
            the real world.
          </p>
        </Info>
      </span>
      <Switch className="w-fit">Continuous</Switch>
    </>
  )
}

export default ParametersForm
