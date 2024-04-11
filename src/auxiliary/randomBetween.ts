export function randomBetween(minimum: number, maximum: number): number {
  const [min, max] = minimum < maximum ? [minimum, maximum] : [maximum, minimum]

  return min + (max - min) * Math.random()
}
