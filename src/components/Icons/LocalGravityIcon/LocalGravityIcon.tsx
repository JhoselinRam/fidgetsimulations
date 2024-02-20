import { useId } from "react"

function LocalGravityIcon(): JSX.Element {
  const id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-15 0 64.7 60"
    >
      <defs>
        <marker
          id={id}
          markerHeight="2"
          markerUnits="userSpaceOnUse"
          markerWidth="2"
          orient="auto-start-reverse"
          overflow="visible"
          preserveAspectRatio="xMidYMid"
          refX="0"
          refY="0"
          viewBox="0 0 1 1"
        >
          <path
            fill="context-stroke"
            fillRule="evenodd"
            stroke="none"
            d="M-2-4L9 0-2 4c2-2.33 2-5.66 0-8z"
          ></path>
        </marker>
      </defs>
      <g
        fill="none"
        stroke="#1e293b"
        strokeDasharray="none"
        transform="translate(-54.493 -75.511) scale(.76124)"
      >
        <circle cx="94.377" cy="120" r="15" strokeWidth="5"></circle>
        <path
          strokeWidth="5"
          markerEnd={`url(#${id})`}
          d="M94.377 145v16"
        ></path>
      </g>
    </svg>
  )
}

export default LocalGravityIcon
