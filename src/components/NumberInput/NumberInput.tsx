import { Group, Label, NumberField, Input } from "react-aria-components"
import type { NumberInputProps } from "./NumberInput_types"
import useNumberInput from "../../hooks/useNumberInput/useNumberInput"
import { useEffect } from "react"

function NumberInput({
  children,
  className,
  step,
  inputClassName,
  unit,
  value,
  onChange,
  ...props
}: NumberInputProps): JSX.Element {
  const { setInnerValue, innerValue, onInnerChange } = useNumberInput(
    value,
    onChange
  )

  useEffect(() => {
    console.log(`Inner value: ${innerValue}`)
  }, [innerValue])

  return (
    <NumberField
      className={`flex flex-row gap-2 text-sm ${className}`}
      value={value ?? innerValue}
      onChange={onInnerChange}
      {...props}
    >
      <Label>{children}</Label>
      <Group className="w-fit">
        <Input
          className={`max-w-input rounded-md bg-zinc-600 px-1 outline-none ${inputClassName}`}
        />
        <span className="ml-1">{unit}</span>
      </Group>
      <button
        onClick={() => {
          setInnerValue((prev) => prev + 1)
        }}
      >
        Inner
      </button>
    </NumberField>
  )
}

export default NumberInput
