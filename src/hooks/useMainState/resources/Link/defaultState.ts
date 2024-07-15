import type { LinkBall, LinkLength, LinkState } from "./Link_types"

export const linkLengthDefaultState: LinkLength = {
  linkLength: 2
}

export const linkBallDefaultState: LinkBall = {
  linkBall: []
}

export const linkDefaultState: LinkState = {
  ...linkLengthDefaultState,
  ...linkBallDefaultState,
  id: "",
  name: "",
  type: "spring"
}
