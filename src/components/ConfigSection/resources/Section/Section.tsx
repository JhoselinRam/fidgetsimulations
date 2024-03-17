import type { SectionProps } from "./Section_types"

function Section({ children, className }: SectionProps): JSX.Element {
  return (
    <div className={`text-sm flex flex-col gap-2 mt-5 z-40 ${className}`}>
      {children}
    </div>
  )
}

export default Section
