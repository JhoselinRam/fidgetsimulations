export interface UseConfigBatchModal {
  rows: ConfigBatchRow[]
  updateRows: () => void
  onAccept: () => void
}

export interface ConfigBatchRow {
  name: string
  positionX: number
  positionY: number
  velocityX: number
  velocityY: number
  mass: number
  charge: number
  radius: number
  color: string
  deleteBall: boolean
  id: string
}

export type SheetPropTypeByName<T extends keyof ConfigBatchRow> = T extends
  | "name"
  | "color"
  ? string
  : T extends "deleteBall"
    ? boolean
    : number
