import { type RefObject, createContext, createRef } from "react"

export const mainAreaContext =
  createContext<RefObject<HTMLDivElement>>(createRef())
