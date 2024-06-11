import type { FormulaWrapperProps } from "./FormulaWrapper_types"

function FormulaWrapper({
  children,
  className
}: FormulaWrapperProps): JSX.Element {
  return (
    <div className={`h-5 flex w-full justify-center ${className}`}>
      {children}
    </div>
  )
}

export default FormulaWrapper
