import { useRef } from "react"
import useWaitIcon from "../../../hooks/useWaitIcon/useWaitIcon"

function WaitIcon(): JSX.Element {
  const svgElement = useRef<SVGSVGElement>(null)
  useWaitIcon(svgElement)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 16 16"
      ref={svgElement}
    >
      <g fillRule="evenodd">
        <circle
          cx="7"
          cy="7"
          r="6"
          fill="none"
          strokeOpacity="0.5"
          strokeWidth="2"
        ></circle>
        <path
          stroke="none"
          fillOpacity="0.8"
          fillRule="nonzero"
          d="M7 0a7 7 0 017 7h-2a5 5 0 00-5-5V0z"
        ></path>
      </g>
    </svg>
  )
}

export default WaitIcon
