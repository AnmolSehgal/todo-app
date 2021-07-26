import { ReactElement } from "react";
import { stateObj } from "../App";
import { CardComponent } from "./CardComponent";

interface ListCardComponentsProps {
  data: stateObj[];
  handleEditTask: (content: string, objectID: string) => void;
  handleInactiveTask: (inactive: boolean, objectID: string) => void;
  handleDeleteTask: (objectID: string) => void;
}

const ListCardComponents = ({
  data,
  handleDeleteTask,
  handleEditTask,
  handleInactiveTask,
}: ListCardComponentsProps): ReactElement => {
  return (
    <ul>
      {data.map((individualData) => {
        return (
          <CardComponent
            dataObj={individualData}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleInactiveTask={handleInactiveTask}
            key={individualData.objectID}
          />
        );
      })}
    </ul>
  );
};
export default ListCardComponents;
