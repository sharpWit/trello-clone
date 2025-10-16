import { useBoardsList } from "@/features/list/hooks";
import { Popover } from "@/components";
import { DotsIcon } from "@/shared";

interface ListBoxHeaderActionsProps {
  boardId: string;
  listId?: string;
}

export const ListBoxHeaderActions = ({
  boardId,
  listId,
}: ListBoxHeaderActionsProps) => {
  const { deleteList } = useBoardsList(boardId);

  const handleSelect = async (value: string) => {
    if (value === "deleteList" && listId) {
      await deleteList(listId);
    }
    if (value === "deleteAllCards") {
      console.log("All cards deleted from list", listId);
    }
  };

  return (
    <Popover
      trigger={<DotsIcon title="options" />}
      title="List Actions"
      options={[
        { label: "Delete List", value: "deleteList", danger: true },
        { label: "Delete All Cards", value: "deleteAllCards", danger: true },
      ]}
      onSelect={handleSelect}
    />
  );
};
