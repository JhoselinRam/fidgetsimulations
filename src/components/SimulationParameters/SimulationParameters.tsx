import { useState } from "react"
import DropSection from "../DropSection/DropSection"

function SimulationParameters(): JSX.Element {
  const [isDrop, setIsDrop] = useState(true)

  return (
    <DropSection className="relative mt-3 ml-2 mr-2 pb-3 after:absolute after:border-2 after:border-tuatara-500 after:bottom-0 after:left-0 after:right-0">
      <div className="w-full flex justify-center">
        <DropSection.Title
          className="text-zinc-300 text-lg"
          iconClassName="stroke-zinc-300"
          isDrop={isDrop}
          onChange={setIsDrop}
        >
          Parameters
        </DropSection.Title>
      </div>
      <DropSection.Body isDrop={isDrop}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        facilis rerum exercitationem, praesentium veniam fugit quod illo
        consequatur voluptatibus, maiores at? Veniam saepe quasi suscipit! Iusto
        veniam aperiam vel alias eveniet, nobis dolore dicta ex consequuntur
        possimus temporibus rerum expedita impedit architecto explicabo. Ut
        deleniti praesentium tenetur ipsa, corporis beatae?
      </DropSection.Body>
    </DropSection>
  )
}

export default SimulationParameters
