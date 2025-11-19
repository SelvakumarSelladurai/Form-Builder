import { fieldTypes } from "../../config/fieldTypes";

export default function FieldList() {
  return (
    <div className="w-56 bg-white p-4 shadow rounded h-full">
      <h2 className="text-lg font-bold mb-3">Fields</h2>

      <div className="space-y-2">
        {fieldTypes.map((field) => (
          <div
            key={field.type}
            className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded"
          >
            {field.label}
          </div>
        ))}
      </div>
    </div>
  );
}
