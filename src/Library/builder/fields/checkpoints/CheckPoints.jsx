export default function CheckPoints({ field }) {
  const options =
    Array.isArray(field.options) && field.options.length > 0
      ? field.options
      : [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "NA", value: "na" },
        ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              readOnly
              name={`checkpoint-${field.id}`}
              className="radio radio-primary cursor-not-allowed"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      <textarea
        className="textarea textarea-bordered w-full min-h-[40px] bg-gray-50 cursor-not-allowed"
        readOnly
        placeholder="Add notes..."
      />
    </div>
  );
}
