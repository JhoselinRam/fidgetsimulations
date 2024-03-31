export interface UseContainerShape {
  shapeHooks: ShapeHooks
  angleHooks: AngleHooks
}

export interface ShapeHooks {
  value: string
  onChange: (value: string) => void
}

export interface AngleHooks {
  value: number
  onChange: (value: number) => void
}

export interface ContainerShapeProps {
  shape: string
  angle: number
}
