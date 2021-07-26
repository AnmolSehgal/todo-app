import { ReactElement } from "react";
import { stateObj } from "../App";

interface ListCardComponentsProps {
  data: stateObj[];
  handleEdit: (objectID: string, content: string) => void;
  handleInactiveActive: (inactive: boolean) => void;
  handleDelete: (objectID: string) => void;
}

const ListCardComponents = ({
  data,
  handleDelete,
  handleEdit,
  handleInactiveActive,
}: ListCardComponentsProps): ReactElement => {
  return <ul></ul>;
};
export default ListCardComponents;
