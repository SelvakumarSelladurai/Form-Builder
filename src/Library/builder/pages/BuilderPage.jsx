import { useBuilderStore } from "../store/builderStore";
import FieldList from "../components/sidebar/FieldList";

export default function BuilderPage() {
  const fields = useBuilderStore((state) => state.fields);

  return (
    <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

      <FieldList />

      <div className="flex-1 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-3">Form Area</h2>

        <div className="space-y-2">
          {fields.map((f) => (
            <div 
              key={f.id} 
              className="p-2 bg-gray-100 rounded border"
            >
              {f.label}
            </div>
          ))}
        </div>
      </div>

      <div className="w-64 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold">Preview</h2>
      </div>

    </div>
  );
}
