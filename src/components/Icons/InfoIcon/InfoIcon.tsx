import type { InfoIconProps } from "./InfoIcon_types"

function InfoIcon({ className = "" }: InfoIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      viewBox="200 200 624 624"
      className={className}
    >
      <path d="M512 717a205 205 0 100-410 205 205 0 000 410zm0 51a256 256 0 110-512 256 256 0 010 512z"></path>
      <path d="M485 364c7-7 16-11 27-11s20 4 27 11c8 8 11 17 11 28 0 10-3 19-11 27-7 7-16 11-27 11s-20-4-27-11c-8-8-11-17-11-27 0-11 3-20 11-28zm-6 105h66v192h-66z"></path>
    </svg>
  )
}

export default InfoIcon
