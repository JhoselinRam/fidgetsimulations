export interface UseSimulationTime {
  switchValue: boolean
  switchCallback: (value: boolean) => void
  timeValue: number
  timeCallback: (value: number) => void
}
