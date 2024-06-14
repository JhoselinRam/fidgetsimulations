export function isBetween(
  n: number,
  min: number,
  max: number,
  inclusive = true
): boolean {
  if (inclusive) return min <= n && n <= max

  return min < n && n < max
}
