function RodIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 -2 40 38"
      stroke="#1e293b"
      strokeWidth="3"
    >
      <circle fill="none" cx={28} cy={12} r={5}></circle>
      <circle fill="none" cx={12} cy={28} r={5}></circle>
      <line strokeWidth={4} x1={25} y1={15} x2={15} y2={25}></line>
    </svg>
  )
}

export default RodIcon
