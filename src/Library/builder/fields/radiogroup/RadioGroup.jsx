import { useState } from 'react';

const RADIO_OPTIONS = {
  FIRST: { value: 'option-1', label: 'Option 1' },
  SECOND: { value: 'option-2', label: 'Option 2' },
  THIRD: { value: 'option-3', label: 'Option 3' },
};

export default function RadioGroup({ field, index }) {
  const [selected, setSelected] = useState(null);

  const options = field.options?.length
    ? field.options
    : Object.values(RADIO_OPTIONS);

  return (
    <div className="flex flex-col mb-2">
      {options.map((option, optionindex) => (
        <label
          key={optionindex}
          className="flex items-center space-x-2 mb-1 cursor-pointer"
        >
          <input
            type="radio"
            name={`radiogroup-${index}`}
            checked={selected === optionindex}
            onChange={() => setSelected(optionindex)} 
            className="form-radio"
          />
          <span>{option.label || option}</span>
        </label>
      ))}
    </div>
  );
}