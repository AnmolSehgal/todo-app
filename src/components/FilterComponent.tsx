import { Component } from "react";

interface filterComponentProps {
  name: string[];
  handleRoute: (stateOfTab: string) => void;
}
interface filterComponentState {}

export class FilterComponent extends Component<
  filterComponentProps,
  filterComponentState
> {
  render() {
    const { name, handleRoute } = this.props;
    return (
      <ul style={{ listStyle: "none" }}>
        {name.map((value) => {
          return (
            <li
              key={value}
              onClick={(evnt) => {
                handleRoute((evnt.target as HTMLLIElement).innerHTML);
              }}
            >
              {value}
            </li>
          );
        })}
      </ul>
    );
  }
}
