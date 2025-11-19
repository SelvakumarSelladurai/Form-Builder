import FieldList from "../components/sidebar/FieldList";

export default function BuilderPage() {
  return (
    <div className="flex w-full h-screen bg-gray-100 p-4 gap-4">

      <FieldList />

      <div className="flex-1 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold">Form Area</h2>
        <p className="text-gray-500">Drop fields here (coming soon)</p>
      </div>

      <div className="w-64 bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold">Preview</h2>
      </div>

    </div>
  );
}
