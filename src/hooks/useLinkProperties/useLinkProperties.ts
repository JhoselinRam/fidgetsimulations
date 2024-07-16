import { useContext } from "react"
import { linkColorDefaultState } from "../useMainState/resources/Link/defaultState"
import type { RodState } from "../useMainState/resources/Rod/Rod_types"
import type { SpringState } from "../useMainState/resources/Spring/Spring_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  LinkPropertiesProps,
  UseLinkProperties
} from "./useLinkProperties_types"
import useBindState from "../useBindState/useBindState"

function useLinkProperties(item: CollectionOrder): UseLinkProperties {
  const { mainState } = useContext(mainStateContext)
  const { color, opacity } = getLinkProperties(item, mainState)

  const colorProps = useBindState(item, color, "link@color")
  const opacityProps = useBindState(item, opacity, "link@opacity")

  return {
    colorHooks: {
      value: colorProps.value,
      onChange: colorProps.changeValue
    },
    opacityHooks: {
      value: opacityProps.value,
      onChange: opacityProps.changeValue
    }
  }
}

export default useLinkProperties

function getLinkProperties(
  item: CollectionOrder,
  state: MainState
): LinkPropertiesProps {
  const collection = getCollection<RodState | SpringState>(item, state, [
    "rod",
    "spring"
  ])
  if (collection == null)
    return {
      ...linkColorDefaultState
    }

  return {
    color: collection.color,
    opacity: collection.opacity
  }
}
