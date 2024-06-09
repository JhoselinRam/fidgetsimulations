import type { FormulaWrapperProps } from "./FormulaWrapper_types"

function FormulaWrapper({ children }: FormulaWrapperProps): JSX.Element {
  return <div className="w-full mx-auto h-3 stroke-slate-950">{children}</div>
}

export default FormulaWrapper
