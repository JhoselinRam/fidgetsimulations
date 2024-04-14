import type { SectionProps } from "./Section_types"

function Section({ children, className }: SectionProps): JSX.Element {
  return (
    <div className={`text-sm mt-5 z-40 first:-mt-3 last:mb-0 ${className}`}>
      {children}
    </div>
  )
}

export default Section
