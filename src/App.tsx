import { FC,ReactElement } from "react";
import InputComponent from "./components/InputComponent";
import './App.css';

import './css/InputComponent.css';

const App:FC = ():ReactElement=>{
    return(<div className="app-container">
        <InputComponent inputType="textbox" className ="inputBar" height="50px" width="500px"/>
    </div>);
}

export default App;