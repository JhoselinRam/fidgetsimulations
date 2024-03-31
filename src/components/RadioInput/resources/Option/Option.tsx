import { Radio } from "react-aria-components"
import type { OptionProps } from "./Option_types"

function Option({ children, className, ...props }: OptionProps): JSX.Element {
  return (
    <Radio
      className={`flex flex-row gap-1 items-center group ${className}`}
      {...props}
    >
      <div
        className={`size-3 rounded-full border border-zinc-500
        group-data-[selected]:border-4 group-data-[selected]:bg-zinc-100 group-data-[selected]:border-accent-blue-600
        group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-accent-blue-300/30 
       group-data-[focus-visible]:outline-offset-2`}
      ></div>
      {children}
    </Radio>
  )
}

export default Option
