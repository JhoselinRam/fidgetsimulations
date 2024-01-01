import { useId } from "react"
import type { Positions, ToolsIconsProps } from "./Tools_types"

function ToolsIcon({
  className = "",
  knobsPosition
}: ToolsIconsProps): JSX.Element {
  const idClipPath = useId()
  const positions: Positions = {
    idle: [14.5, 5.75, 14.5],
    hover: [12.5, 7.75, 15.5],
    activated: [8.5, 14.75, 5.5]
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="-3 -3 26 26"
    >
      <defs>
        <mask
          id={idClipPath}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            strokeWidth="0"
          />
          <circle
            className="transition-all"
            cx="3.25"
            cy={positions[knobsPosition][0]}
            r="1.3"
            fill="black"
            strokeWidth="0"
          />
          <circle
            className="transition-all"
            cx="9.25"
            cy={positions[knobsPosition][1]}
            r="1.3"
            fill="black"
            strokeWidth="0"
          />
          <circle
            className="transition-all"
            cx="15.25"
            cy={positions[knobsPosition][2]}
            r="1.3"
            fill="black"
            strokeWidth="0"
          />
        </mask>
      </defs>
      <line
        x1="3.25"
        y1="1"
        x2="3.25"
        y2="19"
        strokeWidth="2"
        strokeLinecap="round"
        mask={`url(#${idClipPath})`}
      />
      <line
        x1="9.25"
        y1="1"
        x2="9.25"
        y2="19"
        strokeWidth="2"
        strokeLinecap="round"
        mask={`url(#${idClipPath})`}
      />
      <line
        x1="15.25"
        y1="1"
        x2="15.25"
        y2="19"
        strokeWidth="2"
        strokeLinecap="round"
        mask={`url(#${idClipPath})`}
      />
      <circle
        className="transition-all"
        cx="3.25"
        cy={positions[knobsPosition][0]}
        r="2.25"
        strokeWidth="2"
      />
      <circle
        className="transition-all"
        cx="9.25"
        cy={positions[knobsPosition][1]}
        r="2.25"
        strokeWidth="2"
      />
      <circle
        className="transition-all"
        cx="15.25"
        cy={positions[knobsPosition][2]}
        r="2.25"
        strokeWidth="2"
      />
    </svg>
  )
}

export default ToolsIcon
