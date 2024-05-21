export interface BallConfigProps {
  ballId: string
}

export interface BallConfigWidthValidation extends BallConfigProps {
  isValidSelection: boolean
}

export interface VectorConfigType {
  type: BallVectorType
}

export type BallVectorType = "velocity" | "acceleration"
