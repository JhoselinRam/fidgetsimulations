import { Group, Label, NumberField, Input } from "react-aria-components"
import type { NumberInputProps } from "./NumberInput_types"
import { useRef } from "react"
import useNumberInput from "../../hooks/useNumberInput/useNumberInput"

function NumberInput({
  children,
  className,
  step,
  inputClassName,
  labelClassName,
  groupClassName,
  unit,
  value,
  onChange,
  minValue,
  maxValue,
  isDisabled,
  isReadOnly,
  ...props
}: NumberInputProps): JSX.Element {
  const labelElement = useRef<HTMLLabelElement>(null)
  const { innerValue, onInnerChange, labelMoveCallback } = useNumberInput(
    labelElement,
    step ?? 1,
    isDisabled ?? isReadOnly ?? false,
    value,
    onChange,
    minValue,
    maxValue
  )

  return (
    <NumberField
      className={`flex flex-row gap-2 text-sm group ${className}`}
      value={value ?? innerValue}
      onChange={onInnerChange}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      {...props}
    >
      <Label
        className={`select-none touch-none group-data-[disabled]:text-tuatara-600 hover:cursor-ew-resize group-data-[disabled]:cursor-default 
        ${labelClassName}`}
        onPointerDown={labelMoveCallback}
        ref={labelElement}
      >
        {children}
      </Label>
      <Group className={`w-fit flex flex-row ${groupClassName}`}>
        <Input
          className={`max-w-input rounded-md bg-zinc-500 px-1 outline-none
          data-[focus-visible]:outline data-[focus-visible]:outline-2
        data-[focus-visible]:outline-accent-blue-300/30 data-[focus-visible]:outline-offset-1
        group-data-[disabled]:text-tuatara-900
        
          ${inputClassName}`}
        />
        <span className={`ml-1 group-data-[disabled]:text-tuatara-600`}>
          {unit}
        </span>
      </Group>
    </NumberField>
  )
}

export default NumberInput
