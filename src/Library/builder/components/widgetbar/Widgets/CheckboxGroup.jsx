export default function CheckboxGroup({ field }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{field.label}</label>

      <div className="flex flex-col gap-1 mt-1">
        <label><input type="checkbox" disabled /> Option 1</label>
        <label><input type="checkbox" disabled /> Option 2</label>
        <label><input type="checkbox" disabled /> Option 3</label>
      </div>
    </div>
  );
}
