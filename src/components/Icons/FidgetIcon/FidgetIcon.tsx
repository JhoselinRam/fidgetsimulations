import type { FidgetIconProps } from "./FidgetIcon_types"

function FidgetIcon({ color = "black" }: FidgetIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 70.875 43"
      fill={color}
    >
      <defs>
        <marker
          id="marker6"
          markerHeight="0.6"
          markerWidth="0.6"
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
            transform="scale(.7)"
          ></path>
        </marker>
        <marker
          id="ConcaveTriangle"
          markerHeight="0.7"
          markerWidth="0.7"
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
            transform="scale(.7)"
          ></path>
        </marker>
      </defs>
      <g
        fill="none"
        stroke={color}
        strokeDasharray="none"
        strokeOpacity="1"
        transform="translate(-73.195 -99.225)"
      >
        <circle
          cx="118"
          cy="118"
          strokeWidth="2"
          display="inline"
          r="16.977"
        ></circle>
        <circle
          cx="97.5"
          cy="125.5"
          r="14.5"
          strokeWidth="2"
          display="inline"
        ></circle>
        <path
          strokeWidth="1.613"
          markerEnd="url(#ConcaveTriangle)"
          d="M117.993 118.061l20.31-14.67"
        ></path>
        <path
          strokeWidth="1.613"
          markerEnd="url(#marker6)"
          d="M97.501 125.508l-18.33-3.71"
        ></path>
      </g>
    </svg>
  )
}

export default FidgetIcon
