import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type { ObjectShapeProps, UseObjectShape } from "./useObjectShape_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import {
  containerShapeDefaultState,
  containerAngleDefaultState
} from "../useMainState/resources/Container/defaultState"
import useBindState from "../useBindState/useBindState"
import type { ContainerState } from "../useMainState/resources/Container/Container_types"
import type { ObstacleState } from "../useMainState/resources/Obstacle/Obstacle_types"

function useObjectShape(item: CollectionOrder): UseObjectShape {
  const { mainState } = useContext(mainStateContext)
  const { shape, angle } = getContainerShapeProps(item, mainState)

  const shapeProps = useBindState(
    item,
    shape,
    item.type === "container" ? "container@shape" : "obstacle@shape"
  )
  const angleProps = useBindState(
    item,
    angle,
    item.type === "container" ? "container@angle" : "obstacle@angle"
  )

  return {
    shapeHooks: {
      value: shapeProps.value,
      onChange: shapeProps.changeValue
    },
    angleHooks: {
      value: angleProps.value,
      onChange: angleProps.changeValue
    }
  }
}

export default useObjectShape

function getContainerShapeProps(
  item: CollectionOrder,
  state: MainState
): ObjectShapeProps {
  const collection = getCollection<ContainerState | ObstacleState>(
    item,
    state,
    ["container", "obstacle"]
  )
  if (collection == null)
    return {
      ...containerShapeDefaultState,
      ...containerAngleDefaultState
    }

  return {
    shape: collection.shape,
    angle: collection.angle
  }
}
