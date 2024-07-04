export interface CollectionSelectProps {
  selectedKey: CollectionOption
  onSelectionChange: (selection: CollectionOption) => void
}

export const CollectionArray = [
  "visualization",
  "objects",
  "constrains",
  "force"
] as const

export type CollectionOption = (typeof CollectionArray)[number]
