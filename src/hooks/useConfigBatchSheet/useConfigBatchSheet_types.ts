export interface UseConfigBatchSheet {
  rows: ConfigBatchRow[]
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
  delete: boolean
  id: string
}
