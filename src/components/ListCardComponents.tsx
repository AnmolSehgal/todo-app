import { Component } from "react";
import { ReactElement } from "react";
import { AppStateInterface, stateObj } from "../App";
import CardComponent from "./CardComponent";

export interface ListCardInterface {
  data: AppStateInterface;
  handleChange: (content: string, objectID: string) => void;
  handleDelete: (objectID: string) => void;
  handleActive: (inactive: boolean, objectID: string) => void;
}

class ListCardComponents extends Component<ListCardInterface, {}> {
  render() {
    const { data, handleChange, handleDelete, handleActive } = this.props;
    return (
      <ul style={{ listStyle: "none" }}>
        {data.data.map((value: stateObj): ReactElement => {
          return (
            <CardComponent
              tag="li"
              data={value}
              handleChange={handleChange}
              key={value.objectID}
              handleDelete={handleDelete}
              keyValue={value.objectID}
              handleActive={handleActive}
            />
          );
        })}
      </ul>
    );
  }
}
export default ListCardComponents;
