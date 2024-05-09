import { type FocusEvent, useState } from "react"
import type { UseSheetRow } from "./useSheetRow_types"
import type { ConfigBatchRow } from "../../../useConfigBatchModal/useConfigBatchModal_types"

function useSheetRow(data: ConfigBatchRow): UseSheetRow {
  const [name, setName] = useState(data.name)
  const [positionX, setPositionX] = useState(data.positionX)
  const [positionY, setPositionY] = useState(data.positionY)
  const [velocityX, setVelocityX] = useState(data.velocityX)
  const [velocityY, setVelocityY] = useState(data.velocityY)
  const [mass, setMass] = useState(data.mass)
  const [charge, setCharge] = useState(data.charge)
  const [radius, setRadius] = useState(data.radius)
  const [color, setColor] = useState(data.color)
  const [deleteBall, setDeleteBall] = useState(data.deleteBall)

  function selectOnFocus(e: FocusEvent): void {
    const input = e.target as HTMLInputElement
    input.select()
  }

  return {
    name: {
      value: name,
      changeValue: setName
    },
    positionX: {
      value: positionX,
      changeValue: setPositionX
    },
    positionY: {
      value: positionY,
      changeValue: setPositionY
    },
    velocityX: {
      value: velocityX,
      changeValue: setVelocityX
    },
    velocityY: {
      value: velocityY,
      changeValue: setVelocityY
    },
    mass: {
      value: mass,
      changeValue: setMass
    },
    charge: {
      value: charge,
      changeValue: setCharge
    },
    radius: {
      value: radius,
      changeValue: setRadius
    },
    color: {
      value: color,
      changeValue: setColor
    },
    deleteBall: {
      value: deleteBall,
      changeValue: setDeleteBall
    },
    selectOnFocus
  }
}

export default useSheetRow
