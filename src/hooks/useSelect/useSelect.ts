import { type RefObject, useState, useEffect } from "react"
import type { UseSelect } from "./useSelect_types"

function useSelect(
  buttonElement: RefObject<HTMLButtonElement>,
  matchSize: boolean
): UseSelect {
  const [isDrop, setIsDrop] = useState(false)
  const [popoverSize, setPopoverSize] = useState(0)

  useEffect(() => {
    if (buttonElement.current == null) return
    if (!matchSize) return

    const button = buttonElement.current

    const width = button.clientWidth
    setPopoverSize(width)

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.borderBoxSize[0].inlineSize
        setPopoverSize(width)
      }
    })

    resizeObserver.observe(button)

    return (): void => {
      resizeObserver.disconnect()
    }
  }, [buttonElement, matchSize])

  return {
    isDrop,
    setIsDrop,
    popoverSize
  }
}

export default useSelect
