export interface UseTimeSpacing {
  dt: number
  delay: number
  dtCallback: (value: number) => void
  delayCallback: (value: number) => void
}
