import { Component } from "react";

interface PropsInputComponent{
    inputType:string;
    className:string;
    height?:string;
    width?:string;
    placeholder?:string;
    inputValue?:string;
    fontSize?:string;
    handleSubmit : (content:string)=>void;
}
interface InputState{
        inputData:string;
}
class InputComponent extends Component<PropsInputComponent,InputState>{
    constructor(props:PropsInputComponent){
        super(props);
        this.state = {
                        inputData: this.props.inputValue || "",
                    };

    }
    
    render(){
        const {inputType,className,height,width,placeholder,fontSize,handleSubmit,inputValue} = this.props;
        return(
                <input  type = {inputType} 
                    className={className} 
                    style={{height:!height?'20px':height,width:!width?'20px':width,fontSize:!fontSize?'20px':fontSize}}
                    placeholder={placeholder?'':placeholder}
                    defaultValue = {inputValue}
                    
                    onKeyUp={(event):void=>{
                        const val = (event.target as HTMLInputElement).value;
                        
                        if(event.key==='Enter')
                        {
                            
                            if(val.length>0){
                                handleSubmit(val);
                                (event.target as HTMLInputElement).value="";
                            }
                        }
                    }}
                    />
    )
                }
}
export default InputComponent;