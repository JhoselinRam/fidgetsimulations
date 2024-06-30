import { Switch as RASwitch } from "react-aria-components"
import type { SwitchProps } from "./Switch_types"

function Switch({ children, className, ...props }: SwitchProps): JSX.Element {
  return (
    <RASwitch
      className={`flex flex-row items-center gap-2 text-sm group data-[hovered]:cursor-pointer data-[disabled]:text-tuatara-600 ${className}`}
      {...props}
    >
      <div
        className="w-7 h-4 rounded-full bg-zinc-600 pt-0.5 pl-0.5
       group-data-[selected]:bg-accent-blue-600
       group-data-[focus-visible]:outline outline-2 group-data-[focus-visible]:outline-accent-blue-300/30 
       group-data-[focus-visible]:outline-offset-2
       group-data-[disabled]:bg-tuatara-600
       transition"
      >
        <div
          className="w-3 h-3 bg-zinc-200 rounded-full group-data-[selected]:ml-3 
        group-data-[pressed]:w-4 group-data-[selected]:group-data-[pressed]:ml-2  
        transition-all shadow group-data-[disabled]:bg-zinc-400"
        ></div>
      </div>
      {children}
    </RASwitch>
  )
}

export default Switch
