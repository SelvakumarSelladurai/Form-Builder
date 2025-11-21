import Widget from "./Widget";
import { useBuilderStore } from "../store/builderStore";

export default function EditableFieldCard({ field, index }) {
  const { openDrawer } = useBuilderStore();

  return (
    <div className="space-y-2">

      <div className="flex items-center gap-2">
        <span className="font-medium text-gray-700">{field.label}</span>
      </div>

      <Widget field={field} index={index} />

    </div>
  );
}
