import FieldList from "../components/sidebar/FieldList";
import { useBuilderStore } from "../store/builderStore";
import FormField from "../components/sidebar/Widgets/common/FormField";

export default function BuilderPage() {
  const fields = useBuilderStore((state) => state.fields);

  return (
    <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

      <FieldList />

      <div className="flex-1 bg-white shadow rounded p-4 overflow-auto">
        <h2 className="text-xl font-bold mb-3">Form Area</h2>

        {fields.length === 0 ? (
          <p className="text-gray-500">Click a field from the left to add it.</p>
        ) : (
          <div className="space-y-4">
            {fields.map((f) => (
              <div
                key={f.id}
                className="p-3 border rounded bg-gray-50"
              >
                <FormField field={f} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-64 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold">Preview</h2>
        <p className="text-gray-500 text-sm mt-2">
          Preview will be added later.
        </p>
      </div>

    </div>
  );
}
