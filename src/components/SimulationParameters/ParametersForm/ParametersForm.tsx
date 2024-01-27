import { Checkbox } from "react-aria-components"
import type { ParametersFormProps } from "./ParametersForm_types"

function ParametersForm({ isCollapsed }: ParametersFormProps): JSX.Element {
  return (
    <div
      className={`w-3/4 flex flex-col ${
        isCollapsed ? "scale-y-0" : "scale-y-100"
      } origin-top transition-transform`}
    >
      <div className="flex flex-row gap-2">
        <p>Simulation time:</p>
        <Checkbox>Continuum</Checkbox>
      </div>
    </div>
  )
}

export default ParametersForm
