import MainArea from "./components/MainArea/MainArea"
import NavBar from "./components/NavBar/NavBar"
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
          <MainArea />
        </mainStateContext.Provider>
      </main>
    </>
  )
}

export default App
