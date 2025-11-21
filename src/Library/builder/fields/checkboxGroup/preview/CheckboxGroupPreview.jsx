export default function CheckboxGroupPreview({ field }) {
  const options =
    field.options && field.options.length > 0
      ? field.options
      : [{ label: "Option 1" }, { label: "Option 2" }];

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary cursor-not-allowed"
            readOnly
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
