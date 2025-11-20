import Widget from "../fieldcard/Widget";

export default function Preview({ fields }) {
  return (
    <div className="space-y-4">
      {fields.map((fields, index) => (
        <div key={index} className="p-3 bg-gray-50 rounded-lg border">
          <Widget index={index} />
        </div>
      ))}
    </div>
  );
}