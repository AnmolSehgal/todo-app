import { useState } from "react";
import { stateObj } from "../App";
import InputComponent from "./InputComponent";
import { BsPencilSquare } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export const CardComponent = (
  { content, inactive: inactiveProp, objectID }: stateObj,
  handleInActive
) => {
  // setting up state for card Component
  const [toggle, setToggle] = useState(true);
  const [inactive, setInActive] = useState(inactiveProp);
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={inactiveProp}
        onChange={(evt): void => {
          handleInActive(inactive, objectID);
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
          handleSubmit={editContent}
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
            handleDelete(keyValue);
          }}
        />
      </i>
    </li>
  );
};
