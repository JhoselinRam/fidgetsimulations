/* eslint-disable n/no-callback-literal */
export type Throttlefy<R, A extends unknown[] = never> = (
  ...args: A
) => R | null

export function throttlefy<R, A extends unknown[] = never>(
  callback: Throttlefy<R, A>,
  delay: number,
  defaultValue: R | null = null
): Throttlefy<R, A> {
  let timeout: number | undefined

  return (...args: A) => {
    if (timeout !== undefined) return defaultValue

    timeout = setTimeout(() => {
      timeout = undefined
    }, delay)

    return callback(...args)
  }
}
