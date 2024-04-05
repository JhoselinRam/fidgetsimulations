export interface UseLocalGravityMagnitude {
  rectangularHooks: LocalGravityMagnitudeRectangularHooks
  polarHooks: LocalGravityMagnitudePolarHooks
}

export interface LocalGravityMagnitudeRectangularHooks {
  magnitudeX: number
  magnitudeY: number
  changeMagnitudeX: (magnitude: number) => void
  changeMagnitudeY: (magnitude: number) => void
}

export interface LocalGravityMagnitudePolarHooks {
  magnitude: number
  angle: number
  changeMagnitude: (value: number) => void
  changeAngle: (value: number) => void
}
