import useSimulationButton from "../../hooks/useSimulationButton/useSimulationButton"
import Button from "../Button/Button"

function SimulateButton(): JSX.Element {
  const { isRunning, toggleRun } = useSimulationButton()

  return (
    <div className="w-full px-2 my-6">
      <Button
        className="w-full !text-lg"
        buttonType={isRunning ? "danger" : "accent"}
        onPress={toggleRun}
      >
        {isRunning ? "Stop" : "Start"}
      </Button>
    </div>
  )
}

export default SimulateButton
