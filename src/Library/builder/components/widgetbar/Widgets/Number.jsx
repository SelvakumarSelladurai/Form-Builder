export default function Number({ field }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{field.label}</label>
      <input
        type="number"
        className="input input-bordered border p-2 rounded"
        placeholder="0"
        disabled
      />
    </div>
  );
}
