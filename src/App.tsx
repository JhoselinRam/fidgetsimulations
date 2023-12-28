import NavBar from "./components/NavBar/NavBar"
import ToolBar from "./components/ToolBar/ToolBar"

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className="w-full grow relative">
        <ToolBar />
      </main>
    </>
  )
}

export default App
