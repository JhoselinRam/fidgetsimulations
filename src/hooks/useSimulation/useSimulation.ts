import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  type RefObject
} from "react"
import { mainStateContext } from "../useMainState/useMainState"
import type { Graph2D } from "scigrapher/lib/es5/Graph2D/Graph2D_Types"
import {
  type VectorGraph,
  setColor,
  setData,
  setDomain,
  setGrid,
  setMargin,
  setSize
} from "../../auxiliary/simulationUpdate"
import type { Line_Chart } from "scigrapher/lib/es5/Data/LineChart/LineChart_Types"
import { graph2D } from "scigrapher"
import { computeForce } from "./resources/force"
import { firstStepSolver, verletSolver } from "./resources/verletSolver"
import { updateData } from "./resources/updateData"
import type { MainState } from "../useMainState/useMainState_types"
import { computeCollision } from "./resources/collision"
import type { LinkGraph, TrajectoryGraph } from "./useSimulation_types"
import { computeRodLink } from "./resources/rodCompute"

function useSimulation(mainElement: RefObject<HTMLDivElement>): void {
  const { mainState, dispatch } = useContext(mainStateContext)
  const runFollower = useRef(false)
  const innerState = useRef({ ...mainState })
  const simulationTime = useRef(0)
  const delayTime = useRef(0)
  const ballGraph = useRef<Line_Chart | null>(null)
  const trajectoryGraph = useRef<TrajectoryGraph[]>([])
  const vectorGraph = useRef<VectorGraph[]>([])
  const graphElement = useRef<Graph2D | null>(null)
  const linkGraph = useRef<LinkGraph[]>([])

  // --------------------------------------------------------
  // --------------------- Step -----------------------------

  const simulationStep = useCallback(() => {
    if (ballGraph.current == null) return
    if (graphElement.current == null) return

    innerState.current.balls[0].data.forEach((ball) => {
      const [accelX, accelY] = computeForce(innerState.current, ball)
      ball.accelX = accelX
      ball.accelY = accelY
    })
    updateData(
      ballGraph.current,
      vectorGraph.current,
      trajectoryGraph.current,
      linkGraph.current,
      innerState.current
    )

    verletSolver(innerState.current)
    computeRodLink(innerState.current)
    computeCollision(innerState.current)

    graphElement.current.draw()
  }, [graphElement])

  // --------------------------------------------------------
  // --------------------- Draw -----------------------------

  const updateSimulation = useCallback(
    (t: number): void => {
      const timeParams = innerState.current.time
      if (!runFollower.current) return
      if (!timeParams.continuous && simulationTime.current > timeParams.time) {
        dispatch({
          type: "simulation@run",
          payload: { id: "simulation", run: false }
        })
        return
      }
      if (timeParams.delay > 0 && t - delayTime.current < timeParams.delay) {
        window.requestAnimationFrame(updateSimulation)
        return
      }

      simulationStep()
      simulationTime.current += innerState.current.time.dt / 1000
      delayTime.current = t

      window.requestAnimationFrame(updateSimulation)
    },
    [simulationStep, dispatch]
  )

  // --------------------------------------------------------
  // ----------------- Init Simulation ----------------------

  const setupGraph = useCallback(() => {
    if (mainElement.current == null) return

    mainElement.current.replaceChildren()
    const graph = graph2D(mainElement.current)
    const simulationData = innerState.current.simulationWindow[0]

    setSize(graph, simulationData)
    setDomain(graph, simulationData)
    setMargin(graph, simulationData)
    setColor(graph, simulationData)
    setGrid(graph, simulationData)
    const {
      ballGraphElement,
      trajectoryGraphElement,
      vectorGraphElement,
      linkGraphElement
    } = setData(graph, innerState.current)

    ballGraph.current = ballGraphElement
    vectorGraph.current = vectorGraphElement
    trajectoryGraph.current = trajectoryGraphElement
    linkGraph.current = linkGraphElement
    graphElement.current = graph
    innerState.current.balls[0].data.forEach((ball) => {
      const [accelX, accelY] = computeForce(innerState.current, ball)
      ball.accelX = accelX
      ball.accelY = accelY
    })
    firstStepSolver(innerState.current)
    updateData(
      ballGraph.current,
      vectorGraph.current,
      trajectoryGraph.current,
      linkGraph.current,
      innerState.current
    )

    graph.draw()
  }, [mainElement])

  useEffect(() => {
    runFollower.current = mainState.simulation.run

    if (!mainState.simulation.run) return

    innerState.current = JSON.parse(JSON.stringify(mainState)) as MainState
    simulationTime.current = 0
    delayTime.current = 0
    setupGraph()
    updateSimulation(0)
  }, [mainState.simulation.run, mainState, updateSimulation, setupGraph])

  // --------------------------------------------------------
}

export default useSimulation
