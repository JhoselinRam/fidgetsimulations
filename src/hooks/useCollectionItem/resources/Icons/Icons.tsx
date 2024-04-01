import ContainerCollectionItemIcon from "../../../../components/CollectionItemIcons/ContainerCollectionItemIcon"
import DataOutCollectionItemIcon from "../../../../components/CollectionItemIcons/DataOutCollectionItemIcon"
import LinechartCollectionItemIcon from "../../../../components/CollectionItemIcons/LinechartCollectionItemIcon"
import ObstacleCollectionItemIcon from "../../../../components/CollectionItemIcons/ObstacleCollectionItemIcon"
import SimulationWindowCollectionItemIcon from "../../../../components/CollectionItemIcons/SimulationWindowCollectionItemIcon"
import type { ItemIcon } from "../../useCollectionItem_types"

export const itemIcon: ItemIcon = {
  simulationWindow: <SimulationWindowCollectionItemIcon />,
  linechart: <LinechartCollectionItemIcon />,
  dataoutput: <DataOutCollectionItemIcon />,
  container: <ContainerCollectionItemIcon />,
  obstacle: <ObstacleCollectionItemIcon />
}
