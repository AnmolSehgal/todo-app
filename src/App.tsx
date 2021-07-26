import { Component } from "react";
import InputComponent from "./components/InputComponent";
import "./App.css";
import ListCardComponents from "./components/ListCardComponents";
import { v4 as uuidv4 } from "uuid";
import "./css/InputComponent.css";
import { FilterComponent } from "./components/FilterComponent";
import { clone } from "ramda";
export interface stateObj {
  objectID: string;
  content: string;
  inactive: boolean;
}

export interface AppStateInterface {
  data: stateObj[];
  inputData: string;
  stateOfTab: string;
}

class App extends Component<{}, AppStateInterface> {
  state: AppStateInterface = { data: [], inputData: "", stateOfTab: "All" };
  setData = (newData: stateObj[]) => {
    this.setState({ data: newData });
  };
  addData = (content: string): void => {
    const object: stateObj = {
      content: content,
      objectID: uuidv4(),
      inactive: false,
    };
    this.setState({ data: [...this.state.data, object] });
  };
  delete = (objectID: string) => {
    this.setState({
      data: [...this.state.data].filter((value) => {
        if (objectID === value.objectID) return false;
        return true;
      }),
    });
  };

  edit = (content: string, objectID: string): void => {
    const arr: stateObj[] = clone(this.state.data);
    const index = arr.findIndex((value: stateObj) => {
      return value.objectID === objectID;
    });

    if (index > -1) {
      arr[index].content = content;
    }
    this.setState({ data: arr });
  };
  setActiveInactive = (inactive: boolean, objectID: string): void => {
    const arr: stateObj[] = this.state.data;
    const index = arr.findIndex((value: stateObj) => {
      return value.objectID === objectID;
    });
    if (index > -1) {
      arr[index].inactive = inactive;
    }
  };
  setTabState = (stateOfTab: string) => {
    this.setState({ stateOfTab: stateOfTab });
  };
  dataSetForDifferentTab = (): stateObj[] => {
    if (this.state.stateOfTab === "Active")
      return this.state.data.filter((value) => {
        if (value.inactive) return false;
        return true;
      });
    if (this.state.stateOfTab === "In Active")
      return this.state.data.filter((value) => {
        if (value.inactive) return true;
        return false;
      });
    return this.state.data;
  };
  render() {
    return (
      <div className="app-container">
        <p className="title">todos</p>
        <InputComponent
          inputType="textbox"
          className="inputBar"
          height="60px"
          width="500px"
          fontSize="30px"
          handleSubmit={this.addData}
        />
        <ListCardComponents
          data={{
            data: this.dataSetForDifferentTab(),
            inputData: this.state.inputData,
            stateOfTab: this.state.stateOfTab,
          }}
          handleChange={this.edit}
          handleDelete={this.delete}
          handleActive={this.setActiveInactive}
        />
        <FilterComponent
          name={["All", "Active", "In Active"]}
          handleRoute={this.setTabState}
        />
      </div>
    );
  }
}

export default App;
