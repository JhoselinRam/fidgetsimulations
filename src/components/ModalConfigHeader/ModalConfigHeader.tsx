import { Header } from "react-aria-components"
import type { ModalConfigHeaderProps } from "./ModalConfigHeader_types"

function ModalConfigHeader({ children }: ModalConfigHeaderProps): JSX.Element {
  return (
    <Header
      slot="title"
      className="text-lg relative text-zinc-300
    after:absolute after:-bottom-1 after:left-0 after:right-0 after:border after:border-tuatara-500"
    >
      {children}
    </Header>
  )
}

export default ModalConfigHeader
