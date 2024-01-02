import MainArea from "./components/MainArea/MainArea"
import NavBar from "./components/NavBar/NavBar"
import ToolBar from "./components/ToolBar/ToolBar"

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className="w-full grow relative overflow-scroll">
        <ToolBar />
        <MainArea />
      </main>
    </>
  )
}

export default App
