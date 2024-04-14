import { Label, RadioGroup } from "react-aria-components"
import { createComponentNamespace } from "../../auxiliary/createComponentNamespace"
import type { RadioInputProps } from "./RadioInput_types"
import type { OptionProps } from "./resources/Option/Option_types"
import Option from "./resources/Option/Option"

const RadioInput = createComponentNamespace<RadioInputProps, OptionProps>(
  "RadioInput",
  ({
    children,
    className,
    label,
    labelClassName,
    innerClassName,
    optionOrientation = "vertical",
    ...props
  }) => {
    return (
      <RadioGroup className={`text-sm ${className}`} {...props}>
        <Label className={labelClassName}>{label}</Label>
        <div
          className={`flex gap-2 ${
            optionOrientation === "vertical" ? "flex-col" : "flex-row"
          } ${innerClassName}`}
        >
          {children}
        </div>
      </RadioGroup>
    )
  },
  { Option }
)

export default RadioInput
