import { useState } from "react"
// import ParametersTitle from "./ParametersTitle/ParametersTitle"
// import ParametersForm from "./ParametersForm/ParametersForm"
import DropSection from "../DropSection/DropSection"

function SimulationParameters(): JSX.Element {
  const [isDrop, setIsDrop] = useState(true)

  return (
    <DropSection>
      <DropSection.Title isDrop={isDrop} onChange={setIsDrop}>
        Parameters
      </DropSection.Title>
    </DropSection>
  )
}
// <section className="mt-5 flex flex-col items-center relative after:w-11/12 after:border-2 after:border-zinc-300 after:absolute after:bottom-0">
//   <ParametersTitle
//     isCollapsed={isCollapsed}
//     setIsCollapsed={setIsCollapsed}
//   />
//   <ParametersForm isCollapsed={isCollapsed} />
// </section>

export default SimulationParameters
