function TransformIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g fill="none" strokeMiterlimit="10" strokeWidth="2">
        <path d="M6 26L26 6"></path>
        <path d="M13 27L5 27 5 19"></path>
        <path d="M19 5L27 5 27 13"></path>
        <path d="M6 6L26 26"></path>
        <path d="M5 13L5 5 13 5"></path>
        <path d="M27 19L27 27 19 27"></path>
      </g>
    </svg>
  )
}

export default TransformIcon
