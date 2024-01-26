import { useState } from "react"
import ParametersTitle from "./ParametersTitle/ParametersTitle"

function SimulationParameters(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <section>
      <ParametersTitle
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
    </section>
  )
}

export default SimulationParameters
