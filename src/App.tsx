import { ReactElement } from "react";
import InputComponent from "./components/InputComponent";
import "./App.css";
import "./css/InputComponent.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface stateObj {
  objectID: string;
  content: string;
  inactive: boolean;
}

const App = (): ReactElement => {
  // Setting up state for App Component

  const [data, setData] = useState<stateObj[]>([]);
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
    </div>
  );
};

export default App;
