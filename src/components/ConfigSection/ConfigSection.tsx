import type { ConfigSectionProps } from "./ConfigSection_types"

function ConfigSection({ children }: ConfigSectionProps): JSX.Element {
  return (
    <section className="bg-tuatara-800 mt-4 border-2 border-tuatara-500 rounded-md py-1 px-3 flex flex-col">
      {children}
    </section>
  )
}

export default ConfigSection
