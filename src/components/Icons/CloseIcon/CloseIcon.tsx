import type { CloseIconProps } from "./CloseIcon_types"

function CloseIcon({ className = "" }: CloseIconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="5 5 14 14"
      strokeWidth="0.5px"
    >
      <path
        fillRule="evenodd"
        strokeWidth="1"
        d="M10.94 12l-3.97 3.97 1.06 1.06L12 13.06l3.97 3.97 1.06-1.06L13.06 12l3.97-3.97-1.06-1.06L12 10.94 8.03 6.97 6.97 8.03 10.94 12z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default CloseIcon
