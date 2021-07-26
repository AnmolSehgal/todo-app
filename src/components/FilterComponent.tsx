interface FilterComponentProps {
  elementName: string[];
  handleCompletionTask: (completionstatus: string) => void;
}

export const FilterComponent = ({
  elementName,
  handleCompletionTask,
}: FilterComponentProps) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {elementName.map((value) => {
        return (
          <li
            key={value}
            onClick={(evnt) => {
              handleCompletionTask((evnt.target as HTMLLIElement).innerHTML);
            }}
          >
            {value}
          </li>
        );
      })}
    </ul>
  );
};
