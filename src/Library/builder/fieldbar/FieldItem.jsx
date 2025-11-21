import { useDrag } from "react-dnd";

export default function FieldItem({ field }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "WIDGET",
    item: field,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-3 mb-2 border rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition
                  ${isDragging ? "opacity-50" : ""}`}
    >
      {field.label}
    </div>
  );
}
