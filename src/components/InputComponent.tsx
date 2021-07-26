interface props {
  inputType: string;
  className: string;
  height?: string;
  width?: string;
  placeholder?: string;
  handleSubmit: (content: string) => void;
}
function InputComponent(obj: props) {
  return (
    <div>
      <input
        type={obj.inputType}
        className={obj.className}
        style={{
          height: !obj.height ? "20px" : obj.height,
          width: !obj.width ? "20px" : obj.width,
        }}
        placeholder={obj.placeholder ? "" : obj.placeholder}
        onKeyUp={(evnt) => {
          if (evnt.key === "Enter") {
            const val = (evnt.target as HTMLInputElement).value;
            if (val.length > 0) obj.handleSubmit(val);
            (evnt.target as HTMLInputElement).value = "";
          }
        }}
      />
    </div>
  );
}
export default InputComponent;
