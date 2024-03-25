import type { ColorInputProps } from "./ColorInput_types"
import useColorInput from "../../hooks/useColorInput/useColorInput"
import { useRef } from "react"

function ColorInput({
  className,
  containerClassName,
  children,
  id,
  onChange,
  onInput,
  ...props
}: ColorInputProps): JSX.Element {
  const wrapperElement = useRef<HTMLDivElement>(null)
  const inputElement = useRef<HTMLInputElement>(null)
  const { defaultId, onInputCallback, onChangeCallback } = useColorInput(
    inputElement,
    wrapperElement,
    onChange,
    onInput
  )

  return (
    <div className={`flex flex-row gap-2 items-center ${containerClassName}`}>
      <label htmlFor={id ?? defaultId}>{children}</label>
      <div
        ref={wrapperElement}
        className={`w-7 h-4 rounded-full border border-zinc-300 relative
        has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent-blue-300/30 has-[:focus-visible]:outline-offset-2
        ${className}`}
      >
        <input
          type="color"
          className="opacity-0 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          {...props}
          id={id ?? defaultId}
          onInput={onInputCallback}
          onChange={onChangeCallback}
          ref={inputElement}
        />
      </div>
    </div>
  )
}

export default ColorInput
