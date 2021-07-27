import { useState } from "react";
import { stateObj } from "../App";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import classNames from "classnames";

import InputComponent from "./InputComponent";
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
    <li className="liContainer">
      <input
        type="checkbox"
        defaultChecked={inactiveProp}
        onChange={(evt): void => {
          handleInactiveTask(!inactive, objectID);
          setInActive(!inactive);
        }}
      />
      {toggle ? (
        <span
          className={classNames(
            inactive ? "todoActive" : "todoInactive",
            "contentStyle"
          )}
        >
          {content}{" "}
        </span>
      ) : (
        <InputComponent
          inputType="text"
          className="inputBarforEdit"
          width="100px"
          inputValue={content}
          handleSubmit={(value) => {
            handleEditTask(value, objectID);
            setToggle(!toggle);
          }}
        />
      )}
      <div className="iconGroup">
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
      </div>
    </li>
  );
};
