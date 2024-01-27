import type { CollapseArrowIconProps } from "./CollapseArrowIconIcon_types"

function CollapseArrowIcon({
  isCollapsed,
  className = ""
}: CollapseArrowIconProps): JSX.Element {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path
        className="transition-all"
        d={`M 1 ${isCollapsed ? "4" : "8"} L 5 ${isCollapsed ? "8" : "4"} L 9 ${
          isCollapsed ? "4" : "8"
        }`}
      />
    </svg>
  )
}

export default CollapseArrowIcon
