function MoveArrowIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 49.243 20.726"
    >
      <defs>
        <marker
          id="Triangle"
          markerHeight="8"
          markerUnits="userSpaceOnUse"
          markerWidth="2.6"
          orient="auto-start-reverse"
          overflow="visible"
          preserveAspectRatio="none"
          refX="0"
          refY="0"
          viewBox="0 0 1 1"
        >
          <path
            fill="context-stroke"
            fillRule="evenodd"
            stroke="context-stroke"
            strokeWidth=".5pt"
            d="M2.885 0L-1.44 2.5v-5z"
          ></path>
        </marker>
      </defs>
      <g transform="translate(-73.45 -215.338)">
        <path
          fill="none"
          strokeDasharray="none"
          strokeMiterlimit="2"
          strokeWidth="30.233"
          markerEnd="url(#Triangle)"
          d="M98.071 215.338v11.494"
        ></path>
      </g>
    </svg>
  )
}

export default MoveArrowIcon
