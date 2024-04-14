import AddBatchColorControl from "../AddBatchColorControl/AddBatchColorControl"
import AddBatchNumberControl from "../AddBatchNumberControl/AddBatchNumberControl"
import AddBatchNumericControl from "../AddBatchNumericControl/AddBatchNumericControl"

function AddBatchControl(): JSX.Element {
  return (
    <section className="w-full h-full bg-tuatara-800 border border-tuatara-500 rounded-md pt-1 pb-2 px-3 mt-4 mb-2 flex flex-col overflow-auto">
      <AddBatchNumberControl />
      <AddBatchNumericControl title="Position x" unit={"m"} />
      <AddBatchNumericControl title="Position y" unit={"m"} />
      <AddBatchNumericControl title="Velocity x" unit={"m/s"} />
      <AddBatchNumericControl title="Velocity y" unit={"m/s"} />
      <AddBatchNumericControl title="Mass" unit={"kg"} />
      <AddBatchNumericControl title="Charge" unit={"C"} />
      <AddBatchNumericControl title="Radius" unit={"m"} />
      <AddBatchColorControl />
    </section>
  )
}

export default AddBatchControl
