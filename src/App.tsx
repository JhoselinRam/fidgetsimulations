import MainArea from "./components/MainArea/MainArea"
import NavBar from "./components/NavBar/NavBar"
import SimulationWindow from "./components/SimulationWindow/SimulationWindow"
import ToolBar from "./components/ToolBar/ToolBar"
import useMainState, {
  mainStateContext
} from "./hooks/useMainState/useMainState"

function App(): JSX.Element {
  const mainStateHook = useMainState()

  return (
    <>
      <NavBar />
      <main className="w-full grow relative overflow-hidden flex flex-row">
        <mainStateContext.Provider value={mainStateHook}>
          <ToolBar />
          <MainArea>
            <SimulationWindow />
          </MainArea>
        </mainStateContext.Provider>
      </main>
    </>
  )
}

export default App
