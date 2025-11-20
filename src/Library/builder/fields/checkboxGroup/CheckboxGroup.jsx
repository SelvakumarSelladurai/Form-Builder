import Toggle from "../../constant/Toggle";
import Checkbox from "../../constant/Checkbox";

export default function CheckboxGroup({ field, index, toggleChecked }) {
  const isToggled = field.toggle || false;

  const options =
    Array.isArray(field.options) && field.options.length > 0
      ? field.options
      : [{ label: "Option 1", value: "option-1", checked: false }];

  const containerClass = field.inline
    ? "flex flex-wrap gap-4"
    : "flex flex-col gap-2";

  return (
    <div className={containerClass}>
      {options.map((option, optIndex) => (
        <label key={optIndex} className="flex items-center gap-2 cursor-pointer">
          {isToggled ? (
            <Toggle
              type="checkbox"
              checked={option.checked || false}
              onChange={() => toggleChecked(index, optIndex)}
            />
          ) : (
            <Checkbox
              type="checkbox"
              checked={option.checked || false}
              onChange={() => toggleChecked(index, optIndex)}
            />
          )}

          <span>{option.label || "Option"}</span>
        </label>
      ))}
    </div>
  );
}
