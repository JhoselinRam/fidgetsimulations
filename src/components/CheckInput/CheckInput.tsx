import { Checkbox, Label } from "react-aria-components"
import type { CheckColorByType, CheckInputProps } from "./CheckInput_types"

function CheckInput({
  className,
  type = "accent",
  children,
  ...props
}: CheckInputProps): JSX.Element {
  const accentColor: CheckColorByType = {
    accent:
      "group-data-[pressed]:bg-accent-blue-600 group-data-[selected]:bg-accent-blue-600",
    danger: "group-data-[pressed]:bg-red-600 group-data-[selected]:bg-red-600"
  }

  return (
    <Checkbox
      className={`group react-aria-Checkbox flex flex-row items-center ${className}`}
      {...props}
    >
      <div
        className={`size-4 stroke-zinc-300 bg-zinc-300 rounded-sm p-px border-tuatara-700 border
      ${accentColor[type]}
      group-data-[selected]:group-data-[pressed]:bg-zinc-300 transition-colors group-data-[hovered]:cursor-pointer
      group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-accent-blue-300/30 
       group-data-[focus-visible]:outline-offset-2 group-data-[disabled]:bg-zinc-400`}
      >
        <svg
          viewBox="0 0 18 18"
          aria-hidden="true"
          strokeWidth="3px"
          strokeDasharray="22px"
          strokeDashoffset="66"
          className="transition-all duration-150"
          fill="none"
        >
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children != null && (
        <Label className="text-sm ml-2 group-data-[disabled]:text-tuatara-600">
          {children}
        </Label>
      )}
    </Checkbox>
  )
}

export default CheckInput
