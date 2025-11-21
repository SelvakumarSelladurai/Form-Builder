import { useState } from 'react';

export default function TextArea({ field }) {
  const [value, setValue] = useState(field.value || '');

  return (
    <div className="flex flex-col mb-2">
      <div className="relative w-full">
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          className="textarea textarea-bordered w-full min-h-[80px] max-h-40"
          placeholder={field.placeholder || ""}
          rows={4}
        />
      </div>
    </div>
  );
}
