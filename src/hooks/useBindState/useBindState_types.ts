export interface UseBindState<T> {
  value: T
  changeValue: (value: T) => void
}
