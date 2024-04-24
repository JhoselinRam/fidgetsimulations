import useBallAddBatch from "../../../../../hooks/useBallAddBatch/useBallAddBatch"
import AddBatchColorControl from "../AddBatchColorControl/AddBatchColorControl"
import AddBatchNumberControl from "../AddBatchNumberControl/AddBatchNumberControl"
import AddBatchNumericControl from "../AddBatchNumericControl/AddBatchNumericControl"

function AddBatchControl(): JSX.Element {
  const {
    chargeHooks,
    massHooks,
    radiusHooks,
    changeNumber,
    colorHooks,
    number,
    xPositionHooks,
    xVelocityHooks,
    yPositionHooks,
    yVelocityHooks
  } = useBallAddBatch()

  return (
    <section className="w-full h-full bg-tuatara-800 border border-tuatara-500 rounded-md pt-1 pb-3 px-3 mt-4 mb-2 flex flex-col overflow-auto">
      <AddBatchNumberControl changeNumber={changeNumber} number={number} />
      <AddBatchNumericControl
        hooks={xPositionHooks}
        title="Position x"
        unit={"m"}
      />
      <AddBatchNumericControl
        hooks={yPositionHooks}
        title="Position y"
        unit={"m"}
      />
      <AddBatchNumericControl
        hooks={xVelocityHooks}
        title="Velocity x"
        unit={"m/s"}
      />
      <AddBatchNumericControl
        hooks={yVelocityHooks}
        title="Velocity y"
        unit={"m/s"}
      />
      <AddBatchNumericControl hooks={massHooks} title="Mass" unit={"kg"} />
      <AddBatchNumericControl hooks={chargeHooks} title="Charge" unit={"C"} />
      <AddBatchNumericControl hooks={radiusHooks} title="Radius" unit={"m"} />
      <AddBatchColorControl hooks={colorHooks} />
    </section>
  )
}

export default AddBatchControl
