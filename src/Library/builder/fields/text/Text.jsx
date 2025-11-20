export default function Text({ field }) {
  return (
    <input
      type="text"
      placeholder={field.placeholder || "Enter text"}
      className="w-full border rounded px-3 py-2 text-sm"
      disabled
    />
  );
}
