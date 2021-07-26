import { useState } from "react";
import { stateObj } from "../App";
import InputComponent from "./InputComponent";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "../css/CardComponent.css";

export interface CardComponentPropsInterface {
  dataObj: stateObj;
  handleInactiveTask: (inactive: boolean, objectID: string) => void;
  handleEditTask: (content: string, objectID: string) => void;
  handleDeleteTask: (objectID: string) => void;
}

export const CardComponent = ({
  dataObj,
  handleInactiveTask,
  handleEditTask,
  handleDeleteTask,
}: CardComponentPropsInterface) => {
  // setting up state for card Component
  const { objectID, content, inactive: inactiveProp } = dataObj;
  const [toggle, setToggle] = useState(true);
  const [inactive, setInActive] = useState(inactiveProp);
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={inactiveProp}
        onChange={(evt): void => {
          handleInactiveTask(!inactive, objectID);
          setInActive(!inactive);
        }}
      />
      {toggle ? (
        <span className={inactive ? "todoActive" : "todoInactive"}>
          {content}{" "}
        </span>
      ) : (
        <InputComponent
          inputType="text"
          className=""
          width="100px"
          inputValue={content}
          handleSubmit={(value) => {
            handleEditTask(value, objectID);
            setToggle(!toggle);
          }}
        />
      )}
      <i>
        {toggle ? (
          <BsPencilSquare
            color="#ebdbda"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        ) : (
          ""
        )}
      </i>
      <i>
        <ImCross
          color="#ebdbda"
          onClick={(evt) => {
            handleDeleteTask(objectID);
          }}
        />
      </i>
    </li>
  );
};
