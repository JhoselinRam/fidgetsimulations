export function dot(vectorA: number[], vectorB: number[]): number {
  return vectorA.reduce<number>(
    (prev, _, index) => prev + vectorA[index] * vectorB[index],
    0
  )
}

export function rotate(vector: number[], angle: number): number[] {
  return [
    vector[0] * Math.cos(angle) - vector[1] * Math.sin(angle),
    vector[0] * Math.sin(angle) + vector[1] * Math.cos(angle)
  ]
}
