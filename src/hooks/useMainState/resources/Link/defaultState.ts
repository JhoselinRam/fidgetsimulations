import type {
  LinkBall,
  LinkColor,
  LinkEnable,
  LinkLength,
  LinkState
} from "./Link_types"

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

export const linkEnableDefaultState: LinkEnable = {
  enable: true
}

export const linkDefaultState: LinkState = {
  ...linkLengthDefaultState,
  ...linkBallDefaultState,
  ...linkColorDefaultState,
  ...linkEnableDefaultState,
  id: "",
  name: "",
  type: "spring"
}
