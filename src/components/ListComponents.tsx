import { ReactElement } from "react";
import { stateObj } from "../App";

interface ListCardComponentsProps {
  data: stateObj[];
  handleSubmit: (content: string) => void;
}

const ListCardComponents = ({}: ListCardComponentsProps): ReactElement => {
  return <ul></ul>;
};
export default ListCardComponents;
