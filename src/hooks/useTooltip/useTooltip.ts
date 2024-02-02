import { type RefObject, useState, useEffect } from "react"
import type { UseTooltip } from "./useTooltip_types"

function useTooltip(
  buttonElement: RefObject<HTMLButtonElement>,
  dialogElement: RefObject<HTMLDivElement>
): UseTooltip {
  const [isOpen, setIsOpen] = useState(false)

  // Handles the tooltip hoover behavior
  useEffect(() => {
    const button = buttonElement.current
    const dialog = dialogElement.current
    let showTimeoutID = -1
    let hideTimeoutID = -1

    function buttonMouseEnter(): void {
      showTimeoutID = setTimeout(
        () => {
          setIsOpen(true)
        },
        import.meta.env.VITE_INFO_HOVER_ENTER_TIME
      )
    }

    function buttonMouseLeave(): void {
      clearTimeout(showTimeoutID)
      hideTimeoutID = setTimeout(
        () => {
          setIsOpen(false)
        },
        import.meta.env.VITE_INFO_HOVER_LEAVE_TIME
      )
    }

    function dialogMouseEnter(): void {
      clearTimeout(hideTimeoutID)
    }

    function dialogMouseLeave(): void {
      hideTimeoutID = setTimeout(
        () => {
          setIsOpen(false)
        },
        import.meta.env.VITE_INFO_HOVER_LEAVE_TIME
      )
    }

    button?.addEventListener("mouseenter", buttonMouseEnter)
    button?.addEventListener("mouseleave", buttonMouseLeave)
    dialog?.addEventListener("mouseenter", dialogMouseEnter)
    dialog?.addEventListener("mouseleave", dialogMouseLeave)

    return (): void => {
      button?.removeEventListener("mouseenter", buttonMouseEnter)
      button?.removeEventListener("mouseleave", buttonMouseLeave)
      dialog?.removeEventListener("mouseenter", dialogMouseEnter)
      dialog?.removeEventListener("mouseleave", dialogMouseLeave)
    }
  })

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
