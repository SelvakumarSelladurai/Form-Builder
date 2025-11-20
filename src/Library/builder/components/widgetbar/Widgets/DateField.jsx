export default function DateField({ field }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{field.label}</label>
      <input
        type="date"
        className="input input-bordered border p-2 rounded"
        disabled
      />
    </div>
  );
}
