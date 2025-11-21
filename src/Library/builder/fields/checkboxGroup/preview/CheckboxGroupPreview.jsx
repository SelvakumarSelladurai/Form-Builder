export default function CheckboxGroupPreview({ field }) {
  const options = field.options?.length
    ? field.options
    : [{ label: "Option 1" }];

  return (
    <div className="flex flex-col gap-1"> 
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center gap-2 py-[2px]"
        >
          <input
            type="checkbox"
            className="checkbox checkbox-2xs" 
            readOnly
          />

          <span className="text-[11px] text-gray-700 leading-none">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
