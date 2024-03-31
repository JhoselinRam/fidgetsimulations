import { useContext } from "react"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  ContainerShapeProps,
  UseContainerShape
} from "./useContainerShape_types"
import { mainStateContext } from "../useMainState/useMainState"
import { getContainerCollection } from "../useMainState/resources/Container/Container"
import {
  containerShapeDefaultState,
  containerAngleDefaultState
} from "../useMainState/resources/Container/defaultState"
import useBindState from "../useBindState/useBindState"

function useContainerShape(item: CollectionOrder): UseContainerShape {
  const { mainState } = useContext(mainStateContext)
  const { shape, angle } = getContainerShapeProps(item, mainState)

  const shapeProps = useBindState(item, shape, "container@shape")
  const angleProps = useBindState(item, angle, "container@angle")

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

export default useContainerShape

function getContainerShapeProps(
  item: CollectionOrder,
  state: MainState
): ContainerShapeProps {
  const collection = getContainerCollection(item, state)
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
