import type { LinkBall, LinkColor, LinkLength, LinkState } from "./Link_types"

export const linkLengthDefaultState: LinkLength = {
  length: 2
}

export const linkBallDefaultState: LinkBall = {
  linkBall: []
}

export const linkColorDefaultState: LinkColor = {
  color: "#000000",
  opacity: 1
}

export const linkDefaultState: LinkState = {
  ...linkLengthDefaultState,
  ...linkBallDefaultState,
  ...linkColorDefaultState,
  id: "",
  name: "",
  type: "spring"
}
