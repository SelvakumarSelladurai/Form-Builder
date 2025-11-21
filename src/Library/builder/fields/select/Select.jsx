import { useState } from 'react';

const SELECT_OPTIONS = {
  FIRST: { value: 'option-1', label: 'Option 1' },
  SECOND: { value: 'option-2', label: 'Option 2' },
  THIRD: { value: 'option-3', label: 'Option 3' },
};

export default function Select({ field }) {
  const options = field.options?.length
    ? field.options
    : Object.values(SELECT_OPTIONS);

  const [selected, setSelected] = useState(options[0].value);

  return (
    <div className="flex flex-col mb-2">
      <select
        className="select select-bordered w-full"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
