import type { GradientKnobElementProps } from "./GradientKnobElement_types"

function GradientKnobElement({
  index,
  placement,
  color,
  position,
  changeKnobSelected
}: GradientKnobElementProps): JSX.Element {
  return (
    <div
      className={`absolute w-2 flex -translate-x-1/2 hover:cursor-col-resize touch-none ${
        placement === "bottom"
          ? "top-full flex-col-reverse"
          : "bottom-full flex-col"
      }`}
      style={{ left: `${position * 100}%` }}
      onPointerDown={() => {
        changeKnobSelected(index)
      }}
    >
      <div className="size-2 bg-zinc-100 p-px">
        <div className="w-full h-full" style={{ backgroundColor: color }}></div>
      </div>
      <div className={`w-full`}>
        <svg viewBox="0 0 12 6" className="fill-zinc-100">
          {placement === "bottom" ? (
            <path d="M0 6 L6 0 L12 6" />
          ) : (
            <path d="M0 0 L6 6 L12 0" />
          )}
        </svg>
      </div>
    </div>
  )
}

export default GradientKnobElement
