import {
  useState,
  type Dispatch,
  type SetStateAction,
  useRef,
  useEffect
} from "react"
import type { UseConfigShow } from "./useConfigShot_types"

function useConfigShow(
  setIsCollapsed: Dispatch<SetStateAction<boolean>>,
  addCloseCallback: (callback: () => void) => void
): UseConfigShow {
  const [showConfig, setShowConfig] = useState(false)
  const intersectObserver = useRef(
    window.matchMedia(import.meta.env.VITE_CONFIG_INTERSECT_QUERY)
  )

  // Sets the intersection observer event listener on first render
  useEffect(() => {
    const observer = intersectObserver.current
    const handleObserverChange = (e: MediaQueryListEvent): void => {
      if (!e.matches) return

      setShowConfig(false)
    }

    observer.addEventListener("change", handleObserverChange)

    // Clean up the listener
    return (): void => {
      observer.removeEventListener("change", handleObserverChange)
    }
  }, [setShowConfig])

  // Makes sure the toolbar and config bar do not overlap
  useEffect(() => {
    if (!intersectObserver.current.matches) return

    if (showConfig) setIsCollapsed(true)
    else setIsCollapsed(false)
  }, [showConfig, setIsCollapsed])

  // Closes the config bar when the user clicks outside of it
  useEffect(() => {
    addCloseCallback(() => {
      setShowConfig(false)
    })
  }, [addCloseCallback, setShowConfig])

  return {
    showConfig,
    setShowConfig
  }
}

export default useConfigShow
