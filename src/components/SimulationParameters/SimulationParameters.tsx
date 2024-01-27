import { useState } from "react"
import ParametersTitle from "./ParametersTitle/ParametersTitle"
import ParametersForm from "./ParametersForm/ParametersForm"

function SimulationParameters(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <section className="mt-5 flex flex-col items-center">
      <ParametersTitle
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <ParametersForm isCollapsed={isCollapsed} />
    </section>
  )
}

export default SimulationParameters
