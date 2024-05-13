import { ToggleButton } from "react-aria-components"
import type {
  CheckColorByType,
  CheckInputProps,
  CheckSizePicker
} from "./CheckInput_types"

function CheckInput({
  className,
  type = "accent",
  children,
  size,
  ...props
}: CheckInputProps): JSX.Element {
  const accentColor: CheckColorByType = {
    accent:
      "group-data-[pressed]:bg-accent-blue-600 group-data-[selected]:bg-accent-blue-600",
    danger: "group-data-[pressed]:bg-red-600 group-data-[selected]:bg-red-600"
  }
  const sizePiker: CheckSizePicker = {
    regular: "size-4",
    lg: "size-5",
    sm: "size-3",
    xs: "size-2"
  }

  return (
    <ToggleButton
      className={`group react-aria-Checkbox flex flex-row items-center outline-none ${className}`}
      {...props}
    >
      <div
        className={`stroke-zinc-300 bg-zinc-300 rounded-sm p-px border-tuatara-700 border
      ${accentColor[type]} ${size != null ? sizePiker[size] : sizePiker.regular}
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
        <p className="text-sm group-data-[disabled]:text-tuatara-600">
          {children}
        </p>
      )}
    </ToggleButton>
  )
}

export default CheckInput
