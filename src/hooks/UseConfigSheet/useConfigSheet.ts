import { useContext } from "react"
import { sheetDefaultState } from "../useMainState/resources/Sheet/defaultState"
import type { SheetState } from "../useMainState/resources/Sheet/Sheet_types"
import { getCollection, mainStateContext } from "../useMainState/useMainState"
import type {
  CollectionOrder,
  MainState
} from "../useMainState/useMainState_types"
import type {
  SheetCurrentProps,
  SheetProps,
  UseConfigSheet
} from "./useConfigSheet_types"
import useSheetProperties from "./resources/useSheetProperties/useSheetProperties"
import useSheetDynamics from "./resources/useSheetDynamics/useSheetDynamics"
import useSheetBallProperties from "./resources/useSheetBallProperties/useSheetBallProperties"
import type { BallData } from "../useMainState/resources/Balls/Balls_types"
import { createBallState } from "../useMainState/resources/Balls/defaultState"
import { rotate, translate } from "../../auxiliary/vector"
import { toRadians } from "../../auxiliary/angleAux"
import type { RodState } from "../useMainState/resources/Rod/Rod_types"
import { createRodState } from "../useMainState/resources/Rod/defaultState"

function useConfigSheet(item: CollectionOrder): UseConfigSheet {
  const { mainState, dispatch } = useContext(mainStateContext)
  const sheetProps = getSheetProps(item, mainState)

  const propertiesHooks = useSheetProperties(item, sheetProps)
  const dynamicsHooks = useSheetDynamics(item, sheetProps)
  const ballPropertiesHooks = useSheetBallProperties(item, sheetProps)

  // --------------------------------------------------------
  // ------------------- Create Sheet -----------------------

  function createSheet(): void {
    const props = getCurrentProps()
    const newBalls = createSheetBalls(props)

    rotateBalls(newBalls, props)

    const [rowLink, columnLink] = createRodLinks(newBalls, props)

    addToMainState(newBalls, rowLink, columnLink)
  }

  // --------------------------------------------------------
  // ------------------- Current Props ----------------------

  function getCurrentProps(): SheetCurrentProps {
    const columns = propertiesHooks.nodesHooks.columnsHooks.value
    const rows = propertiesHooks.nodesHooks.rowsHooks.value
    const mass =
      ballPropertiesHooks.massChargeHooks.massHooks.value / (columns * rows)
    const charge =
      ballPropertiesHooks.massChargeHooks.chargeHooks.value / (columns * rows)
    const positionX = dynamicsHooks.positionHooks.xHooks.value
    const positionY = dynamicsHooks.positionHooks.yHooks.value
    const width = propertiesHooks.sizeHooks.widthHooks.value
    const height = propertiesHooks.sizeHooks.heightHooks.value
    const velocityX = dynamicsHooks.velocityHooks.xHooks.value
    const velocityY = dynamicsHooks.velocityHooks.yHooks.value
    const radius = ballPropertiesHooks.aestheticsHooks.radiusHooks.value
    const color = ballPropertiesHooks.aestheticsHooks.colorHooks.value
    const recursion = propertiesHooks.recursionHooks.value
    const angle = propertiesHooks.sizeHooks.angleHooks.value

    const xDiff = width / (columns - 1)
    const yDiff = height / (rows - 1)

    return {
      angle,
      charge,
      color,
      columns,
      height,
      mass,
      positionX,
      positionY,
      radius,
      recursion,
      rows,
      velocityX,
      velocityY,
      width,
      xDiff,
      yDiff
    }
  }

  // --------------------------------------------------------
  // -------------------- Create Balls ----------------------

  function createSheetBalls(props: SheetCurrentProps): BallData[][] {
    const sheetBalls: BallData[][] = []

    for (let i = 0; i < props.rows; i++) {
      sheetBalls.push([])
      for (let j = 0; j < props.columns; j++) {
        const ball = createBallState()

        ball.mass = props.mass
        ball.charge = props.charge
        ball.radius = props.radius
        ball.color = props.color
        ball.velocityX = props.velocityX
        ball.velocityY = props.velocityY
        ball.positionX = props.positionX + j * props.xDiff
        ball.positionY = props.positionY - i * props.yDiff
        ball.name = `Sheet ball (${i + 1}, ${j + 1})`

        sheetBalls[i].push(ball)
      }
    }

    return sheetBalls
  }

  // --------------------------------------------------------
  // ---------------------- Rotate ---------------------------

  function rotateBalls(
    sheetBalls: BallData[][],
    props: SheetCurrentProps
  ): void {
    if (props.angle === 0) return

    const sheetCenter = [
      props.positionX + props.width / 2,
      props.positionY - props.height / 2
    ]

    sheetBalls.forEach((row) => {
      row.forEach((ball) => {
        let position = [ball.positionX, ball.positionY]
        position = translate(position, [-sheetCenter[0], -sheetCenter[1]])
        position = rotate(position, toRadians(props.angle))
        position = translate(position, sheetCenter)

        ball.positionX = position[0]
        ball.positionY = position[1]
      })
    })
  }

  // --------------------------------------------------------
  // -------------------- Create Rods -----------------------

  function createRodLinks(
    sheetBalls: BallData[][],
    props: SheetCurrentProps
  ): [RodState, RodState] {
    const rowLink = createRodState()
    const columnLink = createRodState()

    rowLink.name = "Sheet row rod"
    rowLink.length = props.xDiff
    rowLink.recursion = props.recursion

    columnLink.name = "Sheet column rod"
    columnLink.length = props.yDiff
    columnLink.recursion = props.recursion

    for (let i = 0; i < props.rows; i++) {
      for (let j = 1; j < props.columns; j++) {
        rowLink.linkBall.push([sheetBalls[i][j].id, sheetBalls[i][j - 1].id])
      }
    }

    for (let j = 0; j < props.columns; j++) {
      for (let i = 1; i < props.rows; i++) {
        columnLink.linkBall.push([sheetBalls[i][j].id, sheetBalls[i - 1][j].id])
      }
    }

    return [rowLink, columnLink]
  }

  // --------------------------------------------------------
  // ------------------ Add to main state -------------------

  function addToMainState(
    balls: BallData[][],
    rowLink: RodState,
    columnLink: RodState
  ): void {
    balls.forEach((row) => {
      row.forEach((ball) => {
        dispatch({ type: "balls@new", payload: { ...ball } })
      })
    })

    dispatch({ type: "rod@new", payload: { ...rowLink } })
    dispatch({ type: "rod@new", payload: { ...columnLink } })
  }

  // --------------------------------------------------------

  return {
    propertiesHooks,
    dynamicsHooks,
    ballPropertiesHooks,
    createSheet
  }
}

export default useConfigSheet

function getSheetProps(item: CollectionOrder, state: MainState): SheetProps {
  const collection = getCollection<SheetState>(item, state, "sheet")
  if (collection == null)
    return {
      ...sheetDefaultState
    }

  return { ...collection }
}
