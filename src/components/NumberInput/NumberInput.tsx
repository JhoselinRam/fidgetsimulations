import { Group, Label, NumberField, Input } from "react-aria-components"
import type { NumberInputProps } from "./NumberInput_types"
import useNumberInput from "../../hooks/useNumberInput/useNumberInput"
import { useRef } from "react"

function NumberInput({
  children,
  className,
  step,
  inputClassName,
  unit,
  value,
  onChange,
  minValue,
  maxValue,
  isDisabled,
  ...props
}: NumberInputProps): JSX.Element {
  const labelElement = useRef<HTMLLabelElement>(null)
  const { innerValue, onInnerChange, labelMoveCallback } = useNumberInput(
    labelElement,
    step ?? 1,
    value,
    onChange,
    minValue,
    maxValue,
    isDisabled
  )

  return (
    <NumberField
      className={`flex flex-row gap-2 text-sm group ${className}`}
      value={value ?? innerValue}
      onChange={onInnerChange}
      isDisabled={isDisabled}
      {...props}
    >
      <Label
        className="select-none group-data-[disabled]:text-tuatara-600"
        onPointerDown={labelMoveCallback}
        ref={labelElement}
      >
        {children}
      </Label>
      <Group className="w-fit">
        <Input
          className={`max-w-input rounded-md bg-zinc-600 px-1 outline-none
          data-[focus-visible]:outline data-[focus-visible]:outline-2
        data-[focus-visible]:outline-accent-blue-300/30 data-[focus-visible]:outline-offset-1
        group-data-[disabled]:text-tuatara-900 
          ${inputClassName}`}
        />
        <span className="ml-1 group-data-[disabled]:text-tuatara-600">
          {unit}
        </span>
      </Group>
    </NumberField>
  )
}

export default NumberInput
