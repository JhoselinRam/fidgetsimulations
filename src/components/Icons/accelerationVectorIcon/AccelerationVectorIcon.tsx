function AccelerationVectorIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-0.5 -0.5 8 8"
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
          strokeWidth="0.529"
          markerEnd="url(#ArrowWide)"
          d="M65.877 108.586v-4.803"
          opacity="1"
        ></path>
        <text
          x="67.784"
          y="105.349"
          fill="#1e293b"
          strokeWidth="0.207"
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
            strokeWidth="0.207"
          >
            d
          </tspan>
        </text>
        <text
          x="67.345"
          y="108.474"
          fill="#1e293b"
          strokeWidth="0.207"
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
            strokeWidth="0.207"
          >
            dt
          </tspan>
        </text>
        <path
          fill="none"
          strokeWidth="0.414"
          d="M67.142 106.03h3.285"
          opacity="1"
        ></path>
        <text
          x="69.49"
          y="103.588"
          fill="#1e293b"
          strokeWidth="0.153"
          fontSize="2.3"
          opacity="1"
          xmlSpace="preserve"
        >
          <tspan x="69.49" y="103.588" strokeWidth="0.153">
            2
          </tspan>
        </text>
        <text
          x="70.016"
          y="140.09"
          fill="#1e293b"
          strokeWidth="0.153"
          fontSize="2.3"
          opacity="1"
          xmlSpace="preserve"
        >
          <tspan x="70.016" y="107.5" strokeWidth="0.153">
            2
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default AccelerationVectorIcon
