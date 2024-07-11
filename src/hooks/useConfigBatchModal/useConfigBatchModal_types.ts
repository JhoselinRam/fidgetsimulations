export interface UseConfigBatchModal {
  rows: ConfigBatchRow[]
  updateRows: () => void
  onAccept: () => void
  onClose: () => void
  isLoading: boolean
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
  trajectoryMatchColor: boolean
  trajectoryColor: string
  trajectoryFade: boolean
  trajectoryOpacity: number
  trajectoryLength: number
}

export type SheetPropTypeByName<T extends keyof ConfigBatchRow> = T extends
  | "name"
  | "color"
  | "trajectoryColor"
  ? string
  : T extends "deleteBall" | "trajectoryMatchColor" | "trajectoryFade"
    ? boolean
    : number
