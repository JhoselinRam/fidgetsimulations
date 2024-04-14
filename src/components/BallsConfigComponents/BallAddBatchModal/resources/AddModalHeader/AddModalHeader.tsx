import { Header } from "react-aria-components"

function AddModalHeader(): JSX.Element {
  return (
    <Header
      slot="title"
      className="text-lg relative text-zinc-300
    after:absolute after:-bottom-1 after:left-0 after:right-0 after:border-2 after:border-tuatara-500"
    >
      Add Batch:
    </Header>
  )
}

export default AddModalHeader
