import type { FormEvent } from "react"

export interface UseColorInput {
  defaultId: string
  onInputCallback: (e: FormEvent) => void
  onChangeCallback: (e: FormEvent) => void
}
