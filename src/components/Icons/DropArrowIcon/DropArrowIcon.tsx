import type { DropArrowIconProps } from "./DropArrowIcon_types"

function DropArrowIcon({
  isDrop,
  className = ""
}: DropArrowIconProps): JSX.Element {
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
        d={`M 1 ${isDrop ? "8" : "4"} L 5 ${isDrop ? "4" : "8"} L 9 ${
          isDrop ? "8" : "4"
        }`}
      />
    </svg>
  )
}

export default DropArrowIcon
