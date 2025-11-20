export default function Text({ field }) {
  return (
    <div className="flex flex-col">
      <label className="font-medium">{field.label}</label>
      <input
        type="text"
        className="input input-bordered border p-2 rounded"
        placeholder="Enter text"
        disabled
      />
    </div>
  );
}
