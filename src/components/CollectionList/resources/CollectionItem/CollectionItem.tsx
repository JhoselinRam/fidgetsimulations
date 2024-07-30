import { GridListItem } from "react-aria-components"
import type { CollectionItemProps } from "./CollectionItem_types"
import useCollectionItem from "../../../../hooks/useCollectionItem/useCollectionItem"
import DragHandler from "../DragHandler/DragHandler"
import CollectionName from "../CollectionName/CollectionName"
import OpenConfig from "../../../ToolBar/resources/OpenConfig/OpenConfig"
import DeleteControl from "../../../DeleteControl/DeleteControl"
import AnimatedListElement from "../../../AnimatedListElement/AnimatedListElement"

function CollectionItem({
  item,
  setSelection
}: CollectionItemProps): JSX.Element {
  const {
    name,
    icon,
    onExit,
    selectOnAction,
    isDisabled,
    onDelete,
    shouldExit
  } = useCollectionItem(item, setSelection)

  return (
    <GridListItem
      className="group outline-none"
      textValue={item.id}
      id={item.id}
    >
      <AnimatedListElement
        shouldExit={shouldExit}
        enterDirection="left"
        exitDirection="left"
        onExit={onExit}
        className="text-sm bg-zinc-500 rounded-md h-10 mb-1 flex flex-row items-center
      gap-2 px-1 group
      group-data-[selected]:bg-zinc-400"
      >
        <DragHandler />
        {icon}
        <CollectionName name={name} />
        <OpenConfig
          selectOnAction={selectOnAction}
          item={item}
          isDisabled={isDisabled}
        />
        {item.type === "simulationWindow" || item.type === "balls" ? (
          <div className="w-4 flex-shrink-0"></div>
        ) : (
          <DeleteControl
            onDelete={onDelete}
            actionOnPress={selectOnAction}
            placement="right"
            offset={5}
            className="flex-shrink-0"
          />
        )}
      </AnimatedListElement>
    </GridListItem>
  )
}

export default CollectionItem
