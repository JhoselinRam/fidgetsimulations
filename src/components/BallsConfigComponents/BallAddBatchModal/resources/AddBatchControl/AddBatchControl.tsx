import AddBatchColorControl from "../AddBatchColorControl/AddBatchColorControl"
import AddBatchNumberControl from "../AddBatchNumberControl/AddBatchNumberControl"
import AddBatchNumericControl from "../AddBatchNumericControl/AddBatchNumericControl"
import type { AddBatchControlProps } from "./AddBatchControl_types"

function AddBatchControl({
  changeNumber,
  chargeHooks,
  colorHooks,
  massHooks,
  number,
  radiusHooks,
  xPositionHooks,
  xVelocityHooks,
  yPositionHooks,
  yVelocityHooks
}: AddBatchControlProps): JSX.Element {
  return (
    <section className="w-full h-full bg-tuatara-800 border border-tuatara-500 rounded-md pt-1 pb-3 px-3 mt-4 mb-2 flex flex-col overflow-auto">
      <AddBatchNumberControl changeNumber={changeNumber} number={number} />
      <AddBatchNumericControl
        hooks={xPositionHooks}
        title="Position x"
        unit={"m"}
        step={0.03}
      />
      <AddBatchNumericControl
        hooks={yPositionHooks}
        title="Position y"
        unit={"m"}
        step={0.03}
      />
      <AddBatchNumericControl
        hooks={xVelocityHooks}
        title="Velocity x"
        unit={"m/s"}
        step={0.02}
      />
      <AddBatchNumericControl
        hooks={yVelocityHooks}
        title="Velocity y"
        unit={"m/s"}
        step={0.02}
      />
      <AddBatchNumericControl
        hooks={massHooks}
        title="Mass"
        unit={"kg"}
        minValue={import.meta.env.VITE_BALL_MIN_MASS}
        decimals={4}
        step={0.01}
      />
      <AddBatchNumericControl
        hooks={chargeHooks}
        title="Charge"
        unit={"C"}
        step={0.0001}
        decimals={4}
      />
      <AddBatchNumericControl
        hooks={radiusHooks}
        title="Radius"
        unit={"m"}
        minValue={import.meta.env.VITE_BALL_MIN_RADIUS}
        decimals={3}
        step={0.01}
      />
      <AddBatchColorControl hooks={colorHooks} />
    </section>
  )
}

export default AddBatchControl
