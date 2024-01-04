import MainArea from "./components/MainArea/MainArea"
import NavBar from "./components/NavBar/NavBar"
import SimulationWindow from "./components/SimulationWindow/SimulationWindow"
import ToolBar from "./components/ToolBar/ToolBar"

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className="w-full grow relative overflow-hidden">
        <MainArea>
          <SimulationWindow />
        </MainArea>
        <ToolBar />
      </main>
    </>
  )
}

export default App
