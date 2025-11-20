import DroppableCard from "./DroppableCard";
import FieldActions from "./FieldActions";
import EditableFieldCard from "../";

export default function DropItem({ field, index }) {
  return (
    <DroppableCard id={field.id} index={index}>
      <div className="relative p-4 border bg-gray-50 rounded-lg shadow-sm">

        {/* Field Action Buttons */}
        <FieldActions index={index} />

        {/* The actual field UI (text, number, etc.) */}
        <EditableFieldCard field={field} index={index} />

      </div>
    </DroppableCard>
  );
}
