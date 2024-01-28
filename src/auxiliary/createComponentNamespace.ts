import type { ComponentType } from "react"

type InnerType<K> = K extends unknown ? Record<string, ComponentType<K>> : never

export function createComponentNamespace<P, I>(
  displayName: string,
  topLevelComponent: ComponentType<P>,
  innerComponents: InnerType<I>
): ComponentType<P> & InnerType<I> {
  // Set the displayName of the top and inner components
  topLevelComponent.displayName = displayName

  Object.values(innerComponents).forEach((component) => {
    component.displayName = `${displayName}.${component.displayName}`
  })

  return Object.assign(topLevelComponent, innerComponents)
}
