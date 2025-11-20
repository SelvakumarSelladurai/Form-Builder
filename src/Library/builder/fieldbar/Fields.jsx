import { fieldTypes } from "../config/fieldTypes";
import FieldItem from "./FieldItem";

export default function Fields() {
  return (
    <div className="w-60 bg-white border rounded-xl p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Widgets</h2>

      {fieldTypes.map((field) => (
        <FieldItem key={field.type} field={field} />
      ))}
    </div>
  );
}
