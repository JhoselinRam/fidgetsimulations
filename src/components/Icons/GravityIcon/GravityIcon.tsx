import { useId } from "react"

function GravityIcon(): JSX.Element {
  const id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 7.408 7.408"
    >
      <defs>
        <marker
          id={id}
          markerHeight="1"
          markerWidth="1"
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
            d="M1 0l-3 3h-2l3-3-3-3h2z"
          ></path>
        </marker>
      </defs>
      <g
        fill="none"
        stroke="#1e293b"
        strokeDasharray="none"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="6.568"
        transform="translate(21.372 15.215) scale(.76124)"
      >
        <circle cx="-26.338" cy="-11.994" r="1.534" strokeWidth="0.6"></circle>
        <circle cx="-20.081" cy="-18.25" r="1.534" strokeWidth="0.6"></circle>
        <path
          strokeWidth="0.4"
          markerEnd={`url(#${id})`}
          d="M-24.915-13.385l1.249-1.28"
          opacity="1"
        ></path>
        <path
          strokeWidth="0.4"
          markerEnd={`url(#${id})`}
          d="M-21.474-16.868l-1.269 1.26"
          opacity="1"
        ></path>
      </g>
    </svg>
  )
}

export default GravityIcon
