import { createComponentNamespace } from "../../auxiliary/createComponentNamespace"
import Body from "./Body/Body"
import type { BodyProps } from "./Body/Body_types"
import type { DropSectionProps } from "./DropSection_types"
import Title from "./Title/Title"
import type { TitleProps } from "./Title/Title_types"

const DropSection = createComponentNamespace<
  DropSectionProps,
  TitleProps | BodyProps
>(
  "DropSection",
  ({ children, className = "" }: DropSectionProps) => {
    return <section className={className}>{children}</section>
  },
  { Title, Body }
)

export default DropSection
