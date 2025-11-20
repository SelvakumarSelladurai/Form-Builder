import { useState, useEffect } from "react";

export default function DateField({ field, onChange }) {
  const [value, setValue] = useState(field?.value || "");
  const [inputType, setInputType] = useState(getInputType(field?.type));

  function getInputType(type) {
    switch (type) {
      case "Time Field":
        return "time";
      case "Datetime Local Field":
        return "datetime-local";
      default:
        return "date";
    }
  }

  useEffect(() => {
    setValue(field?.value || "");
  }, [field?.value]);

  useEffect(() => {
    setInputType(getInputType(field?.type));
  }, [field?.type]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center space-x-5 mb-3">
      <div className="relative w-56">
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={field?.placeholder || ""}
          className="input input-bordered w-full pr-10"
        />
      </div>
    </div>
  );
}
