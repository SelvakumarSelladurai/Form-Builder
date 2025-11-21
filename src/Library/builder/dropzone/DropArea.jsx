import { useDrop } from "react-dnd";
import DropItem from "./DropItem";
import { useBuilderStore } from "../store/builderStore";

export default function DropArea() {
  const { fields, addField } = useBuilderStore();

  const [, dropRef] = useDrop(() => ({
    accept: "WIDGET",
    drop: (widget) => addField(widget),
  }));

  return (
    <div
      ref={dropRef}
      className="w-full h-full bg-white border rounded-xl p-4 overflow-y-auto"
    >
      <h2 className="text-xl font-bold mb-3">Edit Checklist</h2>

      {fields.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">
          Drag a field from the right to this area.
        </p>
      ) : (
        <div className="space-y-4 mt-4">
          {fields.map((field, index) => (
            <DropItem key={field.id} field={field} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
