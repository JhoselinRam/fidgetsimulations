import type { IconWrapperProps } from "./IconWrapper_types"

function IconWrapper({ children, className }: IconWrapperProps): JSX.Element {
  return (
    <div
      className={`w-4 p-0.5 rounded-full fill-slate-800 flex-shrink-0 ${className}`}
    >
      {children}
    </div>
  )
}

export default IconWrapper
