export interface CollectionSelectProps {
  selectedKey: CollectionOption
  onSelectionChange: (selection: CollectionOption) => void
}

export const CollectionArray = [
  "graphical",
  "objects",
  "constrains",
  "force"
] as const

export type CollectionOption = (typeof CollectionArray)[number]
