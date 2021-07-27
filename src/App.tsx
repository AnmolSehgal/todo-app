import { ReactElement } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { clone } from "ramda";

import "./App.css";
import "./css/InputComponent.css";
import InputComponent from "./components/InputComponent";
import ListCardComponents from "./components/ListComponents";
import { FilterComponent } from "./components/FilterComponent";

export interface stateObj {
  objectID: string;
  content: string;
  inactive: boolean;
}

const App = (): ReactElement => {
  // Setting up state for App Component

  const [data, setData] = useState<stateObj[]>([]);
  const [completionStatus, setCompletionStatus] = useState("All");

  // Setting up the handlers
  const handleEditTask = (content: string, objectID: string): void => {
    const arr = clone(data);
    const index = data.findIndex((value) => {
      return value.objectID === objectID;
    });
    if (index >= 0) arr[index].content = content;
    setData(arr);
  };

  const handleInactiveTask = (inactive: boolean, objectID: string): void => {
    const arr = clone(data);
    const index = data.findIndex((value) => {
      return value.objectID === objectID;
    });
    if (index >= 0) arr[index].inactive = inactive;
    setData(arr);
  };

  const handleDeleteTask = (objectID: string): void => {
    setData(
      [...data].filter((value) => {
        return objectID !== value.objectID;
      })
    );
  };

  const handleCompletionTask = (completionStatus: string) => {
    setCompletionStatus(completionStatus);
  };

  const dataSetFliter = () => {
    if (completionStatus === "Active")
      return data.filter((value) => {
        return value.inactive === false;
      });
    if (completionStatus === "In active")
      return data.filter((value) => {
        return value.inactive === true;
      });

    return data;
  };
  return (
    <div className="app-container">
      <p className="title">todos</p>
      <InputComponent
        inputType="textbox"
        className="inputBar"
        height="50px"
        width="500px"
        handleSubmit={(content: string) => {
          setData([
            ...data,
            { objectID: uuidv4(), content: content, inactive: false },
          ]);
        }}
      />
      <ListCardComponents
        data={dataSetFliter()}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleInactiveTask={handleInactiveTask}
      />
      <FilterComponent
        completionStatus={completionStatus}
        elementName={["All", "Active", "In active"]}
        handleCompletionTask={handleCompletionTask}
      />
    </div>
  );
};

export default App;
