import AccelerationVectorCollectionItemIcon from "../../../../components/CollectionItemIcons/AccelerationVectorCollectionItemIcon"
import BallCollectionItemIcon from "../../../../components/CollectionItemIcons/BallCollectionItemIcon"
import ContainerCollectionItemIcon from "../../../../components/CollectionItemIcons/ContainerCollectionItemIcon"
import DampingCollectionItemIcon from "../../../../components/CollectionItemIcons/DampingCollectionItemIcon"
import DataOutCollectionItemIcon from "../../../../components/CollectionItemIcons/DataOutCollectionItemIcon"
import DragCollectionItemIcon from "../../../../components/CollectionItemIcons/DragItemCollectionIcon"
import ElectricCollectionItemIcon from "../../../../components/CollectionItemIcons/ElectricCollectionItemIcon"
import GravityCollectionItemIcon from "../../../../components/CollectionItemIcons/GravityCollectionItemIcon"
import LinechartCollectionItemIcon from "../../../../components/CollectionItemIcons/LinechartCollectionItemIcon"
import LocalGravityCollectionItemIcon from "../../../../components/CollectionItemIcons/LocalGravityCollectionItemIcon"
import ObstacleCollectionItemIcon from "../../../../components/CollectionItemIcons/ObstacleCollectionItemIcon"
import RodCollectionItemIcon from "../../../../components/CollectionItemIcons/RodCollectionItemIcon"
import RopeCollectionItemIcon from "../../../../components/CollectionItemIcons/RopeCollectionItemIcon"
import SheetCollectionItemIcon from "../../../../components/CollectionItemIcons/SheetCollectionItemIcon"
import SimulationWindowCollectionItemIcon from "../../../../components/CollectionItemIcons/SimulationWindowCollectionItemIcon"
import SpringCollectionItemIcon from "../../../../components/CollectionItemIcons/SpringCollectionItemIcon"
import VelocityVectorCollectionItemIcon from "../../../../components/CollectionItemIcons/VelocityVectorCollectionItemIcon"
import type { ItemIcon } from "../../useCollectionItem_types"

export const itemIcon: ItemIcon = {
  simulationWindow: <SimulationWindowCollectionItemIcon />,
  linechart: <LinechartCollectionItemIcon />,
  dataoutput: <DataOutCollectionItemIcon />,
  container: <ContainerCollectionItemIcon />,
  obstacle: <ObstacleCollectionItemIcon />,
  balls: <BallCollectionItemIcon />,
  localGravity: <LocalGravityCollectionItemIcon />,
  gravity: <GravityCollectionItemIcon />,
  drag: <DragCollectionItemIcon />,
  electric: <ElectricCollectionItemIcon />,
  damping: <DampingCollectionItemIcon />,
  velocityVector: <VelocityVectorCollectionItemIcon />,
  accelerationVector: <AccelerationVectorCollectionItemIcon />,
  spring: <SpringCollectionItemIcon />,
  rod: <RodCollectionItemIcon />,
  rope: <RopeCollectionItemIcon />,
  sheet: <SheetCollectionItemIcon />
}
