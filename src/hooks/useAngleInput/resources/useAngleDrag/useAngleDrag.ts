import { type Dispatch, type RefObject, type SetStateAction } from "react"

function useAngleDrag(
  inputElement: RefObject<HTMLDivElement>,
  setAngle: Dispatch<SetStateAction<number>>
): void {}

export default useAngleDrag
