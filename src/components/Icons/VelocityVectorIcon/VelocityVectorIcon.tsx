function VelocityIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-0.75 -0.75 8.5 8.5"
    >
      <defs>
        <marker
          id="ArrowWide"
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
            fill="none"
            stroke="context-stroke"
            strokeLinecap="butt"
            strokeWidth="1"
            d="M-2.75 3l3-3-3-3"
          ></path>
        </marker>
      </defs>
      <g
        fillOpacity="1"
        stroke="#1e293b"
        strokeDasharray="none"
        transform="translate(-64.103 -102.435)"
      >
        <path
          fill="none"
          strokeWidth="0.45"
          markerEnd="url(#ArrowWide)"
          d="M65.877 108.586v-4.803"
          opacity="1"
        ></path>
        <text
          x="67.784"
          y="105.349"
          fill="#1e293b"
          strokeWidth="0.2"
          fontSize="2.486"
          opacity="1"
          xmlSpace="preserve"
        >
          <tspan
            x="67.784"
            y="105.349"
            fill="#1e293b"
            fillOpacity="1"
            strokeDasharray="none"
            strokeWidth="0.2"
          >
            d
          </tspan>
        </text>
        <text
          x="67.345"
          y="108.474"
          fill="#1e293b"
          strokeWidth="0.2"
          fontSize="2.486"
          opacity="1"
          xmlSpace="preserve"
        >
          <tspan
            x="67.345"
            y="108.474"
            fill="#1e293b"
            fillOpacity="1"
            strokeDasharray="none"
            strokeWidth="0.2"
          >
            dt
          </tspan>
        </text>
        <path
          fill="none"
          strokeWidth="0.3"
          d="M67.142 106.03h3.285"
          opacity="1"
        ></path>
      </g>
    </svg>
  )
}

export default VelocityIcon
