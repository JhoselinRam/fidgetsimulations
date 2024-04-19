import { useRef } from "react"
import useAngleInput from "../../hooks/useAngleInput/useAngleInput"
import type { AngleInputProps } from "./AngleInput_types"

function AngleInput({
  disabled,
  onChange,
  value
}: AngleInputProps): JSX.Element {
  const inputElement = useRef<HTMLDivElement>(null)
  const { angle } = useAngleInput(
    inputElement,
    disabled ?? false,
    value,
    onChange
  )

  return (
    <div
      className={`size-5 border-2 rounded-full relative hover:cursor-crosshair touch-none
       ${
         disabled != null && disabled
           ? "border-tuatara-600 bg-tuatara-700"
           : "border-zinc-300 bg-zinc-500"
       }`}
      ref={inputElement}
    >
      <div
        className={`w-1/2 h-[2px] absolute left-1/2 top-1/2 origin-top-left ${
          disabled != null && disabled ? "bg-tuatara-600" : "bg-zinc-50"
        }`}
        style={{ transform: `rotate(${-angle}deg) translate(0,-50%)` }}
      ></div>
    </div>
  )
}

export default AngleInput
