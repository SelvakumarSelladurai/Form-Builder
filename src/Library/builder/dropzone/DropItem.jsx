import DroppableCard from "./DroppableCard";
import FieldActions from "./FieldActions";
import EditableFieldCard from "../fieldcard/EditableFieldCard";

export default function DropItem({ field, index }) {
  return (
    <DroppableCard id={field.id} index={index}>
      <div className="relative p-4 border bg-gray-50 rounded-lg shadow-sm">

        <FieldActions index={index} />

        <EditableFieldCard field={field} index={index} />

      </div>
    </DroppableCard>
  );
}
