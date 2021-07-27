import "../css/FilterComponent.css";

interface FilterComponentProps {
  elementName: string[];
  completionStatus: string;
  handleCompletionTask: (completionstatus: string) => void;
}

export const FilterComponent = ({
  elementName,
  completionStatus,
  handleCompletionTask,
}: FilterComponentProps) => {
  return (
    <ul className="statusTabContainer">
      {elementName.map((value) => {
        return (
          <li
            key={value}
            className={
              completionStatus === value ? "activeStatus" : "nonActiveStatus"
            }
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
