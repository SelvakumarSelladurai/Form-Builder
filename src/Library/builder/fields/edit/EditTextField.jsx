import { useState } from "react";
import { useBuilderStore } from "../../../store/builderStore";

export default function EditTextField({ field, index }) {
  const { updateField, closeDrawer } = useBuilderStore();

  const [label, setLabel] = useState(field.label || "");
  const [placeholder, setPlaceholder] = useState(field.placeholder || "");
  const [required, setRequired] = useState(field.required || false);

  const saveChanges = () => {
    updateField(index, {
      ...field,
      label,
      placeholder,
      required,
    });

    closeDrawer();
  };

  return (
    <div className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Label
        </label>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Placeholder
        </label>
        <input
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
          className="input input-bordered w-full mt-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={required}
          onChange={() => setRequired(!required)}
        />
        <span>Required</span>
      </div>

      <button
        onClick={saveChanges}
        className="btn btn-primary w-full"
      >
        Save
      </button>
    </div>
  );
}
