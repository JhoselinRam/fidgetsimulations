import { type RefObject, useState, useEffect } from "react"
import type { UseTooltip } from "./useTooltip_types"

function useTooltip(
  buttonElement: RefObject<HTMLButtonElement>,
  dialogElement: RefObject<HTMLDivElement>
): UseTooltip {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (buttonElement.current == null) return

    function buttonMouseEnter(): void {
      const timeOutID = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      function buttonMouseLeave(): void {
        setIsOpen(false)
        clearTimeout(timeOutID)
        buttonElement.current?.removeEventListener(
          "mouseleave",
          buttonMouseLeave
        )
      }

      buttonElement.current?.addEventListener("mouseleave", buttonMouseLeave)
    }

    buttonElement.current.addEventListener("mouseenter", buttonMouseEnter)
  }, [buttonElement, setIsOpen])

  function buttonToggle(): void {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    setIsOpen,
    buttonToggle
  }
}

export default useTooltip
