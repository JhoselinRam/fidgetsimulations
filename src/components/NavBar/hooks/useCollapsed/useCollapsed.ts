import { useCallback, useEffect, useRef, useState } from "react";
import type { UseCollapsed } from "./useCollapsed_types";

/**
 * Custom hook to handle the link list collapse state
 * 
 * @param {string} query - Media Query, e.g. "(min-width: 768px)"
 * @returns {Array} An array with the collapsed state and the dispatch function
 */
function useCollapsed(query: string): UseCollapsed{
  const [isCollapsed, setIsCollapsed] = useState(false)
  const mediaQuery = useRef(window.matchMedia(query))
  
  const handleChange = useCallback((e: MediaQueryListEvent)=>{
    setIsCollapsed(!e.matches) 
  }, [setIsCollapsed]) 

  useEffect(()=>{
    mediaQuery.current.addEventListener("change", handleChange)
  }, [handleChange])


  return [isCollapsed, setIsCollapsed] as const
}

export default useCollapsed