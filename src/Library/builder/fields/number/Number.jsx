export default function Number({ field }) {
  return (
    <div className="flex flex-col">
      <input
        type="number"
        value={field.value ?? ""}
        readOnly
        className="input input-bordered w-full bg-gray-50 cursor-not-allowed"
        placeholder={field.placeholder || ""}
      />
    </div>
  );
}
