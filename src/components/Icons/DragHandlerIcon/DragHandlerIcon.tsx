function DragHAndlerIcon(): JSX.Element {
  const scale = 0.8
  const r = 0.8
  const vSpace = 0.75
  const hSpace = 0.75
  const width = 4 * r + hSpace
  const height = 6 * r + 2 * vSpace

  const boxWidth = width / scale
  const boxHeight = height / scale
  const boxX = (width - boxWidth) / 2
  const boxY = (height - boxHeight) / 2

  const coords = [
    [r, r],
    [r, 3 * r + vSpace],
    [r, 5 * r + 2 * vSpace],
    [3 * r + hSpace, r],
    [3 * r + hSpace, 3 * r + vSpace],
    [3 * r + hSpace, 5 * r + 2 * vSpace]
  ]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox={`${boxX} ${boxY} ${boxWidth} ${boxHeight}`}
    >
      {coords.map((coord) => (
        <circle
          key={`${coord[0]}${coord[1]}`}
          cx={coord[0]}
          cy={coord[1]}
          r={r}
        />
      ))}
    </svg>
  )
}

export default DragHAndlerIcon
