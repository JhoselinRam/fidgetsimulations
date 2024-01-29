import type { ComponentType } from "react"

type InnerType<K> = Record<string, ComponentType<K>>

export function createComponentNamespace<P, I>(
  displayName: string,
  topLevelComponent: ComponentType<P>,
  innerComponents: Record<string, unknown>
): ComponentType<P> & InnerType<I> {
  // Set the displayName of the top and inner components
  topLevelComponent.displayName = displayName

  Object.values(innerComponents).forEach((component) => {
    ;(component as ComponentType).displayName = `${displayName}.${
      (component as ComponentType).displayName
    }`
  })

  // Returns the component and their inner components
  return Object.assign(topLevelComponent, innerComponents as InnerType<I>)
}
