import type { Dispatch, SetStateAction } from "react"

export interface TitleProps {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}
