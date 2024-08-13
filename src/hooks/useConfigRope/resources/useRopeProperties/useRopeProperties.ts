import useBindState from "../../../useBindState/useBindState"
import type { CollectionOrder } from "../../../useMainState/useMainState_types"
import type { RopeProps } from "../../useConfigRope_types"
import type { UseRopeProperties } from "./useRopeProperties_types"

function useRopeProperties(
  item: CollectionOrder,
  props: RopeProps
): UseRopeProperties {
  const lengthProps = useBindState(item, props.length, "rope@length")
  const angleProps = useBindState(item, props.angle, "rope@angle")
  const nodesProps = useBindState(item, props.nodes, "rope@nodes")
  const recursionProps = useBindState(item, props.recursion, "rope@recursion")

  function changeNodes(value: number): void {
    const usedValue = Math.round(value)
    nodesProps.changeValue(usedValue)
  }

  function changeRecursion(value: number): void {
    const usedValue = Math.round(value)
    recursionProps.changeValue(usedValue)
  }

  return {
    lengthHooks: {
      value: lengthProps.value,
      onChange: lengthProps.changeValue
    },
    angleHooks: {
      value: angleProps.value,
      onChange: angleProps.changeValue
    },
    nodesHooks: {
      value: nodesProps.value,
      onChange: changeNodes
    },
    recursionHooks: {
      value: recursionProps.value,
      onChange: changeRecursion
    }
  }
}

export default useRopeProperties
