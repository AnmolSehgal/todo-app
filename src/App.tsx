import { ReactElement } from "react";
import InputComponent from "./components/InputComponent";
import "./App.css";
import "./css/InputComponent.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { clone } from "ramda";
import ListCardComponents from "./components/ListComponents";

export interface stateObj {
  objectID: string;
  content: string;
  inactive: boolean;
}
const App = (): ReactElement => {
  // Setting up state for App Component

  const [data, setData] = useState<stateObj[]>([]);

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
        data={data}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleInactiveTask={handleInactiveTask}
      />
    </div>
  );
};

export default App;
