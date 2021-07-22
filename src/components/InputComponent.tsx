

interface props{
    inputType:string;
    className:string;
    height?:string;
    width?:string;
    placeholder?:string;
}
function InputComponent(obj:props){
    return(
        <div>
            
            <input  type = {obj.inputType} 
                    className={obj.className} 
                    style={{height:!obj.height?'20px':obj.height,width:!obj.width?'20px':obj.width}}
                    placeholder={obj.placeholder?'':obj.placeholder}
                    />
        </div>
    )
}
export default InputComponent;