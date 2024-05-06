/* eslint-disable react-hooks/exhaustive-deps */
import {
  type RefObject,
  useId,
  type FormEvent,
  useEffect,
  useCallback
} from "react"
import type { UseColorInput } from "./useColorInput_types"
import { throttlefy } from "../../auxiliary/throttlefy"

function useColorInput(
  input: RefObject<HTMLInputElement>,
  wrapper: RefObject<HTMLDivElement>,
  outerChangeCallback: ((color: string) => void) | undefined,
  outerInputCallback: ((color: string) => void) | undefined,
  disabled: boolean,
  value: string | undefined
): UseColorInput {
  const defaultId = useId()
  const usedChangeCallback = useCallback(
    throttlefy(
      (color: string) => {
        if (outerChangeCallback != null) outerChangeCallback(color)
      },
      import.meta.env.VITE_COLOR_THROTTLE_TIME
    ),
    [outerChangeCallback]
  )
  const usedInputCallback = useCallback(
    throttlefy(
      (color: string) => {
        if (outerInputCallback != null) outerInputCallback(color)
      },
      import.meta.env.VITE_COLOR_THROTTLE_TIME
    ),
    [outerInputCallback]
  )

  useEffect(() => {
    if (input.current == null) return
    if (wrapper.current == null) return
    if (disabled) {
      wrapper.current.style.backgroundColor = "#5d5d5d" // Tuatara 600
      return
    }

    wrapper.current.style.backgroundColor = input.current.value
  }, [input, wrapper, disabled])

  useEffect(() => {
    if (value == null) return
    if (wrapper.current == null) return
    if (disabled) {
      wrapper.current.style.backgroundColor = "#5d5d5d" // Tuatara 600
      return
    }

    wrapper.current.style.backgroundColor = value
  }, [value, wrapper, disabled])

  function onInputCallback(e: FormEvent): void {
    const color = (e.target as HTMLInputElement).value

    usedInputCallback(color)
    if (wrapper.current != null) wrapper.current.style.backgroundColor = color
  }

  function onChangeCallback(e: FormEvent): void {
    usedChangeCallback((e.target as HTMLInputElement).value)
  }

  return {
    defaultId,
    onInputCallback,
    onChangeCallback
  }
}

export default useColorInput
