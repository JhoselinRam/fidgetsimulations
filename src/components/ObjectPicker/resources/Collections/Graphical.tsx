import GearIcon from "../../../Icons/GearIcon/GearIcon"
import type { ItemType } from "../CollectionGrid/CollectionGrid_types"

// ------------------- Line Chart -------------------------

export const lineChartItem: ItemType = {
  id: "linechart",
  title: "Line Chart",
  action: lineChartAction,
  children: <GearIcon />
}

function lineChartAction(): void {
  console.log("Line Chart Action")
}
// --------------------------------------------------------
// -------------------- Data Out --------------------------

export const dataOutItem: ItemType = {
  id: "dataout",
  title: "Data out",
  action: dataOutAction,
  children: <GearIcon />
}

function dataOutAction(): void {
  console.log("Data Out Action")
}
// --------------------------------------------------------
