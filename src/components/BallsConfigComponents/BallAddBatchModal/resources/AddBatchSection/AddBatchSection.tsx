import { createComponentNamespace } from "../../../../../auxiliary/createComponentNamespace"
import type { AddBatchSectionProps } from "./AddBatchSection_types"
import Header from "./resources/Header/Header"
import type { HeaderProps } from "./resources/Header/Header_types"
import Section from "./resources/Section/Section"
import type { SectionProps } from "./resources/Section/Section_types"

const AddBatchSection = createComponentNamespace<
  AddBatchSectionProps,
  HeaderProps | SectionProps
>(
  "AddBatchSection",
  ({ children }) => {
    return <section className="flex flex-col my-1">{children}</section>
  },
  { Header, Section }
)

export default AddBatchSection
