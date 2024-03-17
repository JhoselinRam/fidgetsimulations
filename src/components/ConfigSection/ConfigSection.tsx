import { useState } from "react"
import { createComponentNamespace } from "../../auxiliary/createComponentNamespace"
import type { ConfigSectionProps } from "./ConfigSection_types"
import Header from "./resources/Header/Header"
import Section from "./resources/Section/Section"
import DropSection from "../DropSection/DropSection"
import type { HeaderProps } from "./resources/Header/Header_types"
import type { SectionProps } from "./resources/Section/Section_types"

const ConfigSection = createComponentNamespace<
  ConfigSectionProps,
  HeaderProps | SectionProps
>(
  "ConfigSection",
  ({ title, children, dropDefault }) => {
    const [isDrop, setIsDrop] = useState(dropDefault ?? false)

    return (
      <DropSection className="w-full mt-4 flex flex-col items-center relative after:absolute after:border-2 after:border-tuatara-500 after:bottom-0 after:left-0 after:right-0">
        <DropSection.Title
          className="text-zinc-300"
          iconClassName="stroke-zinc-300"
          isDrop={isDrop}
          onChange={setIsDrop}
        >
          {title}
        </DropSection.Title>
        <DropSection.Body
          className="bg-tuatara-800 border-2 border-tuatara-500 rounded-md pt-1 pb-2 px-3 flex flex-col mb-3"
          isDrop={isDrop}
        >
          {children}
        </DropSection.Body>
      </DropSection>
    )
  },
  { Header, Section }
)

export default ConfigSection
