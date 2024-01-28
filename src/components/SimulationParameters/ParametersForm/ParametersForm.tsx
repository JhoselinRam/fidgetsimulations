import { Switch } from "react-aria-components"
import type { ParametersFormProps } from "./ParametersForm_types"

function ParametersForm({ isCollapsed }: ParametersFormProps): JSX.Element {
  return (
    <div
      className={`w-4/5 flex flex-col text-sm ${
        isCollapsed ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
      } origin-top transition-all`}
    >
      <div className="flex flex-row gap-2">
        <p>Simulation time:</p>
        <Switch>Continuous</Switch>
      </div>
    </div>
  )
}

export default ParametersForm
