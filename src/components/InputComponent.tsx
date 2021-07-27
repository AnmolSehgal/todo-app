interface InputComponentProps {
  inputType: string;
  inputValue?: string;
  className: string;
  height?: string;
  width?: string;
  placeholder?: string;
  fontSize?: string;
  handleSubmit: (content: string) => void;
}
function InputComponent({
  inputType,
  className,
  height,
  width,
  fontSize,
  placeholder,
  inputValue,
  handleSubmit,
}: InputComponentProps) {
  return (
    <div>
      <input
        type={inputType}
        className={className}
        defaultValue={inputValue ? inputValue : ""}
        style={{
          height: !height ? "20px" : height,
          width: !width ? "20px" : width,
          fontSize: !fontSize ? "20px" : fontSize,
        }}
        placeholder={placeholder ? "" : placeholder}
        onKeyUp={(evnt) => {
          if (evnt.key === "Enter") {
            const val = (evnt.target as HTMLInputElement).value;
            if (val.length > 0) handleSubmit(val);
            (evnt.target as HTMLInputElement).value = "";
          }
        }}
      />
    </div>
  );
}
export default InputComponent;
